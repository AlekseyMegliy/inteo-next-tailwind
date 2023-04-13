import React from "react";
import GermanDA from "../../../assets/germanDA.svg";
import GoldDA from "../../../assets/goldDA.svg";
import IfDA from "../../../assets/ifDA.svg";
import GoodDA from "../../../assets/goodDA.svg";
import styles from "./honors.module.scss";

const awards = [
  {
    icon: GermanDA,
    title: "German Design Award",
    year: "2021",
  },
  {
    icon: GoldDA,
    title: "Gold A’ Design Award",
    year: "2021",
  },
  {
    icon: IfDA,
    title: "IF Design Award",
    year: "2020",
  },
  {
    icon: GoodDA,
    title: "Good Design Award",
    year: "2019",
  },
];
export default function Honors() {
  return (
    <div className={styles.root}>
      <div className="container flex justify-center">
        <span className=" flex h-20 md:my-auto">
          <p className={styles.header}>Awards</p>
        </span>
        <ul className={styles.items}>
          {awards.map((item, index) => (
            <li className={styles.item} key={index}>
              <item.icon alt="Design Award" />
              <p className="mx-3 my-auto">
                {item.title} <br />
                {item.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
