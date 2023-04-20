import React from "react";
import Image from "next/image";
import Arrow from "../../assets/Arrow.svg";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import styles from "./works.module.scss";

const works = [
  {
    icon: work1,
    head: "Villa Furnishing & Interior",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
  },
  {
    icon: work2,
    head: "Luxury Hotel Renovation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
  },
  {
    icon: work3,
    head: "Residence Swimming Pool",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
  },
];
export default function Works() {
  return (
    <section className={`${styles.root} container`} id="works">
      <div className={styles.firstCol}>
        <div className="flex flex-col gap-6">
          <p className="sign">RECENT WORKS</p>
          <h1 className="containerHeader">
            Some of <i>our crafts</i> made with love
          </h1>
        </div>

        <div className={styles.item}>
          <Image
            className="w-full md:mb-2"
            alt="Service Icon"
            src={works[0].icon}
            placeholder="blur"
          />
          <h3 className="text-2xl md:text-4xl md:leading-tight">
            {works[0].head}
          </h3>
          <p>{works[0].desc}</p>
        </div>
        <button className="button absolute bottom-16 px-6 py-4 text-sm sm:bottom-[105px] lg:relative lg:bottom-0">
          CONTACT US <Arrow alt="Arrow" />
        </button>
      </div>

      <div className={styles.secondCol}>
        {works.slice(1).map((item, index) => (
          <div className={styles.item} key={index}>
            <Image
              className="w-full "
              alt="Service Icon"
              src={item.icon}
              placeholder="blur"
            />
            <h3 className="text-2xl md:text-4xl md:leading-tight">
              {item.head}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
