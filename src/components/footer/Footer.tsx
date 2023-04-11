import React from "react";
import Inst from "../../assets/inst.svg";
import Tw from "../../assets/tw.svg";
import Fb from "../../assets/fb.svg";
import Yt from "../../assets/yt.svg";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="text-base font-light lg:my-2">
        © 2022 Inteo - Award winning studio. Made with love by{" "}
        <span className="inline text-primary-600"> Landify</span>
      </p>
      <div className={styles.footer__social}>
        <p className={styles.footer__social_connect}>CONNECT</p>

        <ul className={styles.footer__social_icons}>
          <li>
            <a href="#">
              <Inst alt="Instagram" className={styles.footer__social_icon} />
            </a>
          </li>
          <li>
            <a href="#">
              <Fb alt="Facebook" className={styles.footer__social_icon} />
            </a>
          </li>
          <li>
            <a href="#">
              <Yt alt="Logo" className={styles.footer__social_icon} />
            </a>
          </li>
          <li>
            <a href="#">
              <Tw alt="Logo" className={styles.footer__social_icon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
