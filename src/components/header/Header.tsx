import React from "react";
import { scroller } from "react-scroll";
import Logo from "../../assets/Logo.svg";
import Arrow from "../../assets/Arrow.svg";
import styles from "./header.module.scss";

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
    <header className={styles.root}>
      <Logo alt="Logo" />
      <div className="flex gap-11">
        <ul className="hidden gap-11 md:flex">
          <li>
            <a
              className={styles.link}
              onClick={() => scrollToElement("aboutUs")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              onClick={() => scrollToElement("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a className={styles.link} onClick={() => scrollToElement("works")}>
              Our Work
            </a>
          </li>
        </ul>

        <button className="button">
          CONTACT US <Arrow alt="Arrow" className="ml-1" />
        </button>
      </div>
    </header>
  );
}
