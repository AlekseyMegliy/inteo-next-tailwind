import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  function updateWidth() {
    setWidth(window.innerWidth);
  }
  return (
    <>
      <Header width={width} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
