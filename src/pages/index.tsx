import Head from "next/head";
import Awards from "../components/awards/Awards";
import AboutUs from "../components/aboutUs/AboutUs";
import Services from "../components/services/Services";
import Contacts from "../components/contacts/Contacts";
import Works from "../components/works/Works";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inteo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Awards />
        <div className="text-dark mx-5 sm:mx-10 md:mx-28">
          <AboutUs />
          <Services />
          <Works />
          <Contacts />
        </div>
      </main>
    </>
  );
}
