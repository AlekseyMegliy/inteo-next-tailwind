import React from "react";
import Inst from "../../assets/inst.svg";
import Tw from "../../assets/tw.svg";
import Fb from "../../assets/fb.svg";
import Yt from "../../assets/yt.svg";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span className="my-3 text-base font-light">
        © 2022 Inteo - Award winning studio. Made with love by{" "}
        <p className="inline text-brown"> Landify</p>
      </span>
      <div className={styles.footer__social}>
        <p className="relative left-1 my-auto">CONNECT</p>
        <svg className="my-auto" width="64px" height="1px">
          <rect x="0" y="0" width="64px" height="1px" fill="#444444" />
        </svg>
        <div className=" flex gap-x-6 gap-y-4">
          <a className="rounded-full border-2 p-3" href="#">
            <Inst className="my-auto" alt="Instagram" />
          </a>
          <a className="rounded-full border-2 p-3" href="#">
            <Fb className="my-auto" alt="Facebook" />
          </a>
          <a className="rounded-full border-2 p-3" href="#">
            <Yt className="my-auto" alt="Logo" />
          </a>
          <a className="rounded-full border-2 p-3" href="#">
            <Tw className="my-auto" alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
