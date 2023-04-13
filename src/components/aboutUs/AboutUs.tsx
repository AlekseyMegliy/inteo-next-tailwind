import React from "react";
import Image from "next/image";
import Statistics from "./statistics/statistics";
import Star from "../../assets/Star.svg";
import aboutImg1 from "../../assets/aboutImg1.png";
import aboutImg2 from "../../assets/aboutImg2.png";
import styles from "./aboutUs.module.scss";

export default function AboutUs() {
  return (
    <section className={styles.root} id="aboutUs">
      <div className={styles.description}>
        <div className="flex flex-col gap-6">
          <p className="sign">ABOUT US</p>
          <h2 className="containerHeader">
            We help to bring your <i>dream home</i> to reality
          </h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
        </p>
        <p>
          Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris
          posuere auctor justo. Habitant proin aliquet volutpat leo ultricies.
          Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio
          bibendum lobortis diam.
        </p>
      </div>
      <div className={styles.winner}>
        <div className={styles.circle}>
          <Star className="absolute left-14 top-14" alt="Star" />
          <svg
            className=" -rotate-45"
            viewBox="-15.5 75.5  130 130"
            width="135"
            height="135"
          >
            <defs>
              <path
                id="MyPath"
                fill="none"
                stroke="red"
                d="M50,95 a 45,45 0 1,1 -0.1,0"
              />
            </defs>

            <text fontSize="12" fontFamily="Outfit" fill="#444444">
              <textPath className="tracking-[.27em]" href="#MyPath">
                DESIGN STUDIO AWARD WINNING
              </textPath>
            </text>
          </svg>
        </div>
        <Image
          className="mb-10 h-auto w-1/2 sm:mb-20 "
          alt="Winner Img"
          src={aboutImg1}
          priority
        />
        <Image
          className="mt-10 h-auto w-1/2 sm:mt-20 "
          alt="Winner Img"
          src={aboutImg2}
          priority
        />
      </div>
      <Statistics />
    </section>
  );
}
