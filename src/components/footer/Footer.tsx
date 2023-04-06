import React from "react";
import Inst from "../../assets/inst.svg";
import Tw from "../../assets/tw.svg";
import Fb from "../../assets/fb.svg";
import Yt from "../../assets/yt.svg";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className="text-base font-light lg:my-2">
        © 2022 Inteo - Award winning studio. Made with love by{" "}
        <p className="inline text-brown"> Landify</p>
      </span>
      <div className={styles.footer__social}>
        <p className={styles.footer__connect}>CONNECT</p>

        <ul className={styles.footer__icons}>
          <li>
            <a href="#">
              <Inst alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <Fb alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <Yt alt="Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <Tw alt="Logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
