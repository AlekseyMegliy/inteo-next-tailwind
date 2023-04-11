import React from "react";
import Image from "next/image";
import Arrow from "../../assets/Arrow.svg";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import styles from "./works.module.scss";

const workImgs = [work1, work2, work3];
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
export default function Works({ width }: { width: number }) {
  return (
    <section className={styles.works} id="works">
      <div className={styles.works__firstCol}>
        <div className="flex flex-col gap-6">
          <p className="sign">RECENT WORKS</p>
          <h1 className="container_header">
            Some of <i>our crafts</i> made with love
          </h1>
        </div>

        <div className={styles.works__item}>
          <Image
            className="w-full md:mb-2"
            alt="Service Icon"
            src={works[0].icon}
            priority
          />
          <h3 className="text-2xl md:text-4xl md:leading-tight">
            {works[0].head}
          </h3>
          <p>{works[0].desc}</p>
        </div>
        {width > 1200 && (
          <button className="button px-6 py-4 text-sm">
            CONTACT US <Arrow alt="Arrow" />
          </button>
        )}
      </div>
      <div className={styles.works__secondCol}>
        {works.slice(1).map((item, index) => (
          <div className={styles.works__item} key={index}>
            <Image
              className="w-full "
              alt="Service Icon"
              src={item.icon}
              priority
            />
            <h3 className="text-2xl md:text-4xl md:leading-tight">
              {item.head}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      {width < 1200 && (
        <button className="button px-6 py-4 text-sm">
          CONTACT US <Arrow alt="Arrow" />
        </button>
      )}
    </section>
  );
}
