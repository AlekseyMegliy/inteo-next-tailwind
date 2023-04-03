import React from "react";
import ServiceIcon1 from "../../assets/ServiceIcon1.svg";
import ServiceIcon2 from "../../assets/ServiceIcon2.svg";
import ServiceIcon3 from "../../assets/ServiceIcon3.svg";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.services} id="services">
      <div className={styles.services_headers}>
        <span className="flex gap-4">
          <svg className="my-auto w-16" height="1px">
            <rect x="0" y="0" width="64px" height="1px" fill="#996830" />
          </svg>
          <p className="sign">OUR SERVICES</p>
        </span>
        <h1 className="container_header">
          We provide the <i>best solutions</i> for your dream home
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        <div className={styles.services__item}>
          <ServiceIcon1 className="mb-8 sm:mb-20" alt="Service Icon" />
          <h1 className={styles.services__item__header}>
            Architectural & <br />
            Interior design
          </h1>
          <p className="font-outfit text-lg font-light">
            Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc,
            molestie volutpat ipsum, ultricies.
          </p>
        </div>
        <div className={styles.services__item}>
          <ServiceIcon2 className="mb-8 sm:mb-20" alt="Service Icon" />
          <h1 className={styles.services__item__header}>
            Building <br />
            Renovation
          </h1>
          <p className="font-outfit text-lg font-light">
            Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc,
            molestie volutpat ipsum, ultricies.
          </p>
        </div>
        <div className={styles.services__item}>
          <ServiceIcon3 className="mb-8 sm:mb-20" alt="Service Icon" />
          <h1 className={styles.services__item__header}>
            Construciton <br />
            Management
          </h1>
          <p className="font-outfit text-lg font-light">
            Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc,
            molestie volutpat ipsum, ultricies.
          </p>
        </div>
      </div>
    </div>
  );
}
