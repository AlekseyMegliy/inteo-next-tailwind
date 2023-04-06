import React from "react";
import Image from "next/image";
import Arrow from "../../assets/ArrowBg.svg";
import heroImg from "../../assets/hero-image.png";
import heroImgMob from "../../assets/hero-image-mob.png";
import GermanDA from "../../assets/germanDA.svg";
import GoldDA from "../../assets/goldDA.svg";
import IfDA from "../../assets/ifDA.svg";
import GoodDA from "../../assets/goodDA.svg";
import styles from "./awards.module.scss";

export default function Awards({ width }: { width: number }) {
  const awards = [
    {
      icon: "German",
      title: "German Design Award",
      year: "2021",
    },
    {
      icon: "Gold",
      title: "Gold A’ Design Award",
      year: "2021",
    },
    {
      icon: "IF",
      title: "IF Design Award",
      year: "2020",
    },
    {
      icon: "Good",
      title: "Good Design Award",
      year: "2019",
    },
  ];
  function icons(name: string) {
    switch (name) {
      case "German":
        return <GermanDA alt="German Design Award" />;
      case "Gold":
        return <GoldDA alt="Gold Design Award" />;
      case "IF":
        return <IfDA alt="IF Design Award" />;
      case "Good":
        return <GoodDA alt="Good Design Award" />;
    }
  }
  return (
    <section className={styles.awards}>
      <div className={styles.awards__headers}>
        <h1 className={styles.awards__header}>
          Make <i>your home</i> an ode to joy
        </h1>
        <h2 className={styles.awards__postheader}>
          We turn your empty house to a lovely home, making the compact spaces
          with sapce saving furnitures. Making the unique tastes of yours into
          reality!
        </h2>
      </div>
      <div className={styles.awards__hero}>
        <div className="container text-center lg:text-left">
          <div className={styles.awards__circle}>
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
        <div className="relative bottom-16 overflow-hidden">
          {width < 380 ? (
            <Image
              className="h-[641px] object-cover "
              alt="Main Img"
              src={heroImgMob}
              priority
            />
          ) : (
            <Image
              className="h-[640px] object-cover "
              alt="Main Img"
              src={heroImg}
              priority
            />
          )}

          <div className={styles.awards_honors}>
            <div className="container flex justify-center">
              <span className=" flex h-20 md:my-auto">
                <p className={styles.awards_honors__header}>Awards</p>
              </span>
              <ul className={styles.awards_honors__items}>
                {awards.map((item, index) => (
                  <li className={styles.awards_honors__item} key={index}>
                    {icons(item.icon)}
                    <p className="mx-3 my-auto">
                      {item.title} <br />
                      {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
