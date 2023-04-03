import React from "react";
import Image from "next/image";
import Star from "../../assets/Star.svg";
import aboutImg1 from "../../assets/aboutImg1.png";
import aboutImg2 from "../../assets/aboutImg2.png";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs} id="aboutUs">
      <div className={styles.aboutUs_description}>
        <span className="flex gap-4">
          <svg className="my-auto w-16" height="1px">
            <rect x="0" y="0" width="64px" height="1px" fill="#996830" />
          </svg>
          <p className="sign">ABOUT US</p>
        </span>
        <h1 className="container_header">
          We help to bring your <i>dream home</i> to reality
        </h1>
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
      <div className={styles.aboutUs_winner}>
        <div className={styles.aboutUs_winner__circle}>
          <Star className="absolute top-12 left-12" alt="Star" />
          <svg
            className=" -rotate-45"
            viewBox="-15.5 75.5  130 130"
            width="120"
            height="120"
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
      <div className={styles.aboutUs_statistics}>
        <span className="flex flex-grow flex-wrap">
          <h1 className="font-playfairNumbers text-6xl -tracking-wide">100%</h1>
          <p className="mx-2 mt-3.5 sm:mt-2 md:mt-3.5">
            SATISFITATION <br />
            CLIENTS
          </p>
        </span>
        <span className="flex flex-grow flex-wrap">
          <h1 className="font-playfairNumbers text-6xl -tracking-wide">250</h1>
          <p className="mx-2 mt-3.5 sm:mt-2 md:mt-3.5">
            EMPLOYEES ON <br />
            WORLDWIDE
          </p>
        </span>
        <span className="flex flex-grow flex-wrap">
          <h1 className="font-playfairNumbers text-6xl -tracking-wide">3469</h1>
          <p className="mx-2 mt-3.5 sm:mt-2 md:mt-3.5">
            PROJECTS COMPLETED <br />
            ON 60 COUNTRIES
          </p>
        </span>
      </div>
    </div>
  );
}
