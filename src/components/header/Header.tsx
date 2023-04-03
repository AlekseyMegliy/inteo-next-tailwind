import React from "react";
import { scroller } from "react-scroll";
import Logo from "../../assets/Logo.svg";
import Arrow from "../../assets/Arrow.svg";
import styles from "./header.module.css";

export default function Header() {
  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };
  return (
    <div className={styles.header}>
      <Logo alt="Logo" />
      <div className="flex gap-12">
        <a
          className={styles.header__link}
          onClick={() => scrollToElement("aboutUs")}
        >
          About
        </a>
        <a
          className={styles.header__link}
          onClick={() => scrollToElement("services")}
        >
          Services
        </a>
        <a
          className={styles.header__link}
          onClick={() => scrollToElement("works")}
        >
          Our Work
        </a>
        <button className="button">
          CONTUCT US <Arrow alt="Arrow" />
        </button>
      </div>
    </div>
  );
}
