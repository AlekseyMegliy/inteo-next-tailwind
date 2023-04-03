import React from "react";
import Image from "next/image";
import Arrow from "../../assets/ArrowBg.svg";
import heroImg from "../../assets/hero-image.png";
import GermanDA from "../../assets/germanDA.svg";
import GoldDA from "../../assets/goldDA.svg";
import IfDA from "../../assets/ifDA.svg";
import GoodDA from "../../assets/goodDA.svg";
import styles from "./awards.module.css";

export default function Awards() {
  return (
    <div className={styles.awards}>
      <div className={styles.awards_headers}>
        <h1 className={styles.awards_headers__header}>
          Make <i>your home</i> an ode to joy
        </h1>
        <h2 className={styles.awards_headers__postheader}>
          We turn your empty house to a lovely home, making the compact spaces
          with sapce saving furnitures. Making the unique tastes of yours into
          reality!
        </h2>
      </div>
      <div className={styles.awards_hero}>
        <div className={styles.awards_hero__circle}>
          <Arrow className="absolute top-11 right-11" alt="Arrow" />
          <svg
            className=" rotate-[107deg]"
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

            <text fontSize="12" fontFamily="Outfit" fill="white">
              <textPath className="tracking-[.27em]" href="#MyPath">
                GET IN TOUCH • GET IN TOUCH •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="relative bottom-16 overflow-hidden">
          <Image
            className="h-screen object-cover "
            alt="Main Img"
            src={heroImg}
            priority
          />
          <div className={styles.awards_hero_honors}>
            <span className="mr-5 flex h-20 sm:my-auto">
              <p className={styles.awards_hero_honors__header}>Awards</p>
              <svg className="my-auto w-6 opacity-50 sm:w-16" height="1px">
                <rect x="0" y="0" width="64px" height="1px" fill="white" />
              </svg>
            </span>

            <div className={styles.awards_hero_honors__header_container}>
              <span className="flex h-20 text-sm text-gray-300">
                <GermanDA alt="German Design Award" />
                <p className="my-auto ml-3 w-36">
                  German Design Award <br />
                  2021
                </p>
              </span>
              <span className="flex h-20 text-sm text-gray-300">
                <GoldDA alt="Gold A’ Design Award" />
                <p className="my-auto ml-3 w-36">
                  Gold A’ Design Award <br />
                  2021
                </p>
              </span>
              <span className="flex h-20 text-sm text-gray-300">
                <IfDA alt="IF Design Awar" />
                <p className="my-auto ml-3 w-36">
                  IF Design Award <br />
                  2020
                </p>
              </span>
              <span className="flex h-20 text-sm text-gray-300">
                <GoodDA alt="Good Design Award" />
                <p className="my-auto ml-3 w-36">
                  Good Design Award <br />
                  2019
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
