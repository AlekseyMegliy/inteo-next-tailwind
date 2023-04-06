import React from "react";
import styles from "./contacts.module.scss";

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__headers}>
        <h1>Kick-start your dream home with us</h1>
        <a className={styles.contacts__sayHi}>Send us a hi</a>
      </div>
      <div className={styles.contacts__contactsCol}>
        <div className="flex flex-col gap-2">
          <h2 className="font-playfairDisplay text-2xl font-normal">
            Brooklyn, New York
          </h2>
          <p>
            962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
            State.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Email us at</p>
          <p className={styles.contacts__contact}>hello@landify.design</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>If you&apos;re hurry, quick call for us</p>
          <p className={styles.contacts__contact}>+8(663)125-08-59</p>
        </div>
      </div>
    </section>
  );
}
