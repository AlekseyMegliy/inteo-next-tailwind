import React from "react";
import Image from "next/image";
import Honors from "./honors/honors";
import Arrow from "../../assets/ArrowBg.svg";
import heroImg from "../../assets/hero-image.png";
import styles from "./awards.module.scss";

export default function Awards() {
  return (
    <section className={styles.root}>
      <div className={styles.headers}>
        <h1 className={styles.header}>
          Make <i>your home</i> an ode to joy
        </h1>
        <p className={styles.subheader}>
          We turn your empty house to a lovely home, making the compact spaces
          with sapce saving furnitures. Making the unique tastes of yours into
          reality!
        </p>
      </div>
      <div className={styles.hero}>
        <div className="container text-center lg:text-left">
          <div className={styles.circle}>
            <Arrow className="absolute right-10 top-10" alt="Arrow" />
            <svg
              className=" rotate-[107deg]"
              viewBox="-15.5 75.5  130 130"
              width="113"
              height="113"
            >
              <defs>
                <path
                  id="MyPath"
                  fill="none"
                  stroke="red"
                  d="M50,95 a 45,45 0 1,1 -0.1,0"
                />
              </defs>

              <text fontSize="12" fontFamily="Outfit" fill="white">
                <textPath className="tracking-[.27em]" href="#MyPath">
                  GET IN TOUCH • GET IN TOUCH •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className="relative bottom-16 w-full overflow-hidden">
          <Image
            className=" h-[640px] w-full object-cover"
            alt="Main Img"
            src={heroImg}
            sizes="(max-width: 1200px) 100vw,
              (max-width: 768px) 50vw,
              20vw"
            priority
          />

          <Honors />
        </div>
      </div>
    </section>
  );
}
