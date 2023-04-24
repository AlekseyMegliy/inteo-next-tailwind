import React from "react";
import styles from "./statistics.module.scss";

const statistics = [
  {
    num: "100%",
    desc: "SATISFITATION CLIENTS",
  },
  {
    num: "250",
    desc: "EMPLOYEES ON WORLDWIDE",
  },
  {
    num: "3469",
    desc: "PROJECTS COMPLETED ON 60 COUNTRIES",
  },
];

export default function Statistics() {
  return (
    <ul className={styles.root}>
      {statistics.map((item, index) => (
        <li className="flex flex-grow flex-wrap" key={index}>
          <h1 className={styles.number}>{item.num}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}
