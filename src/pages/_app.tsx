import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
function useWindowSize() {
  const [size, setSize] = useState([1000]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function App({ Component, pageProps }: AppProps) {
  const [width] = useWindowSize();

  return (
    <>
      <Header width={width} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
