import React from "react";
import styles from "./contacts.module.scss";

export default function Contacts() {
  return (
    <section className={styles.root}>
      <div className={styles.headers}>
        <h2>Kick-start your dream home with us</h2>
        <a href="#" className={styles.sayHi}>
          Send us a hi
        </a>
      </div>
      <div className={styles.contactsCol}>
        <div className="flex flex-col gap-2">
          <h3 className=" text-2xl ">Brooklyn, New York</h3>
          <p>
            962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
            State.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Email us at</p>
          <a href="#" className={styles.contact}>
            hello@landify.design
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p>If you&apos;re hurry, quick call for us</p>
          <a href="#" className={styles.contact}>
            +8(663)125-08-59
          </a>
        </div>
      </div>
    </section>
  );
}
