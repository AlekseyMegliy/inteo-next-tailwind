import React from "react";
import styles from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_headers}>
        <h1>Kick-start your dream home with us</h1>
        <h2 className={styles.contacts_headers__sayHi}>Send us a hi</h2>
      </div>
      <div className={styles.contacts_contactsCol}>
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
          <p className={styles.contacts_contactsCol__contact}>
            hello@landify.design
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>If you&apos;re hurry, quick call for us</p>
          <p className={styles.contacts_contactsCol__contact}>
            +8(663)125-08-59
          </p>
        </div>
      </div>
    </div>
  );
}
