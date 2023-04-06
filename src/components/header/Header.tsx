import React from "react";
import { scroller } from "react-scroll";
import Logo from "../../assets/Logo.svg";
import Arrow from "../../assets/Arrow.svg";
import styles from "./header.module.scss";

export default function Header({ width }: { width: number }) {
  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };
  return (
    <header className={styles.header}>
      <Logo alt="Logo" className="my-2" />
      <ul className="flex gap-11">
        {width >= 768 && (
          <>
            <li>
              <a
                className={styles.header__link}
                onClick={() => scrollToElement("aboutUs")}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={styles.header__link}
                onClick={() => scrollToElement("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className={styles.header__link}
                onClick={() => scrollToElement("works")}
              >
                Our Work
              </a>
            </li>
          </>
        )}
        <li>
          <button className="button">
            CONTUCT US <Arrow alt="Arrow" />
          </button>
        </li>
      </ul>
    </header>
  );
}
