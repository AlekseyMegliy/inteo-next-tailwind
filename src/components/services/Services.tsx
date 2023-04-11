import React from "react";
import ServiceIcon1 from "../../assets/ServiceIcon1.svg";
import ServiceIcon2 from "../../assets/ServiceIcon2.svg";
import ServiceIcon3 from "../../assets/ServiceIcon3.svg";
import styles from "./services.module.scss";

const services = [
  {
    icon: ServiceIcon1,
    head: "Architectural & Interior design",
    desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
  {
    icon: ServiceIcon2,
    head: "Building Renovation",
    desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
  {
    icon: ServiceIcon3,
    head: "Construciton Management",
    desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="flex flex-col gap-6 lg:w-3/5">
        <p className="sign">OUR SERVICES</p>
        <h2 className="container_header mb-2 ">
          We provide the <i>best solutions</i> for your dream home
        </h2>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        {services.map((item, index) => (
          <div className={styles.services__item} key={index}>
            <item.icon alt="Service" className="mb-6 md:mb-20" />
            <h3 className={styles.services__item_header}>{item.head}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
