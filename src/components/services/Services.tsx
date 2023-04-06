import React from "react";
import ServiceIcon1 from "../../assets/ServiceIcon1.svg";
import ServiceIcon2 from "../../assets/ServiceIcon2.svg";
import ServiceIcon3 from "../../assets/ServiceIcon3.svg";
import styles from "./services.module.scss";

export default function Services() {
  const services = [
    {
      icon: "Architectural",
      head: "Architectural & Interior design",
      desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
    },
    {
      icon: "Building",
      head: "Building Renovation",
      desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
    },
    {
      icon: "Construciton",
      head: "Construciton Management",
      desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
    },
  ];
  function icons(name: string) {
    switch (name) {
      case "Architectural":
        return <ServiceIcon1 className="mb-6 sm:mb-20" alt="Service Icon" />;
      case "Building":
        return <ServiceIcon2 className="mb-6 sm:mb-20" alt="Service Icon" />;
      case "Construciton":
        return <ServiceIcon3 className="mb-6 sm:mb-20" alt="Service Icon" />;
    }
  }
  return (
    <section className={styles.services} id="services">
      <div className={styles.services__headers}>
        <span className="flex flex-col gap-6">
          <p className="sign">OUR SERVICES</p>
          <h1 className="container_header mb-2 ">
            We provide the <i>best solutions</i> for your dream home
          </h1>
        </span>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        {services.map((item, index) => (
          <div className={styles.services__item} key={index}>
            {icons(item.icon)}
            <h1 className={styles.services_item__header}>{item.head}</h1>
            <p className="font-outfit text-lg font-light leading-8">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
