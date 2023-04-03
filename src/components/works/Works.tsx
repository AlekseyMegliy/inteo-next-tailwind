import React from "react";
import Image from "next/image";
import Arrow from "../../assets/Arrow.svg";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import styles from "./works.module.css";

export default function Works() {
  return (
    <div className={styles.works} id="works">
      <div className={styles.works_firstCol}>
        <span className="flex gap-4">
          <svg className="my-auto w-16" height="1px">
            <rect x="0" y="0" width="64px" height="1px" fill="#996830" />
          </svg>
          <p className="sign">RECENT WORKS</p>
        </span>
        <h1 className="container_header">
          Some of <i>our crafts</i> made with love
        </h1>
        <div className={styles.works_firstCol__item}>
          <Image
            className="mb-6 w-full"
            alt="Service Icon"
            src={work1}
            priority
          />
          <h1 className="text-2xl sm:text-4xl sm:leading-tight">
            Villa Furnishing & Interior
          </h1>
          <p className="font-outfit text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
            morbi.
          </p>
        </div>
        <button className="button hidden md:flex">
          CONTUCT US <Arrow alt="Arrow" />
        </button>
      </div>
      <div className={styles.works_secondCol}>
        <div className="flex flex-col gap-4 ">
          <Image className="w-full" alt="Service Icon" src={work2} priority />
          <h1 className="text-2xl sm:text-4xl sm:leading-tight">
            Luxury Hotel Renovation
          </h1>
          <p className="font-outfit text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
            morbi.
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <Image className="w-full" alt="Service Icon" src={work3} priority />
          <h1 className="text-2xl sm:text-4xl sm:leading-tight">
            Residence Swimming Pool
          </h1>
          <p className="font-outfit text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
            morbi.
          </p>
        </div>
      </div>
      <button className="button flex md:hidden">
        CONTUCT US <Arrow alt="Arrow" />
      </button>
    </div>
  );
}
