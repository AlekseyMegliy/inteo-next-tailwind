import React from "react";
import Image from "next/image";
import Arrow from "../../assets/Arrow.svg";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import styles from "./works.module.scss";

export default function Works({ width }: { width: number }) {
  const workImgs = [work1, work2, work3];
  const works = [
    {
      head: "Villa Furnishing & Interior",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    },
    {
      head: "Luxury Hotel Renovation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
    },
    {
      head: "Residence Swimming Pool",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
    },
  ];
  return (
    <section className={styles.works} id="works">
      <div className={styles.works__firstCol}>
        <span className="flex flex-col gap-6">
          <p className="sign">RECENT WORKS</p>
          <h1 className="container_header">
            Some of <i>our crafts</i> made with love
          </h1>
        </span>

        <div className={styles.works__item}>
          <Image
            className="w-full md:mb-2"
            alt="Service Icon"
            src={workImgs[0]}
            priority
          />
          <h1 className="text-2xl md:text-4xl md:leading-tight">
            {works[0].head}
          </h1>
          <p className="font-outfit font-light">{works[0].desc}</p>
        </div>
        {width > 1200 && (
          <button className="button  flex px-6  py-4">
            CONTUCT US <Arrow alt="Arrow" />
          </button>
        )}
      </div>
      <div className={styles.works__secondCol}>
        {works.slice(1).map((item, index) => (
          <div className={styles.works__item} key={index}>
            <Image
              className="w-full "
              alt="Service Icon"
              src={workImgs[index + 1]}
              priority
            />
            <h1 className="text-2xl md:text-4xl md:leading-tight">
              {item.head}
            </h1>
            <p className="font-outfit font-light">{item.desc}</p>
          </div>
        ))}
      </div>
      {width < 1200 && (
        <button className="button  px-6 py-4">
          CONTUCT US <Arrow alt="Arrow" />
        </button>
      )}
    </section>
  );
}
