import Image from "next/image";
import React from "react";
import styles from "./Home.module.css";
import Link from 'next/link'

export function HomePage({ img }) {
  return (
    <section className={styles.home}>
      <div className={styles.homeData}>
        <h1>Create Excel formula in 2 seconds</h1>

        <p>Describe your idea, we'll create a formula</p>
      </div>
      <div className={styles.homeCTA}>
        <div className={styles.homeImg}>
          <Image
            layout="responsive"
            className={styles.homeImg}
            src={img}
            alt="app preview"
          />
        </div>
        <Link href="auth?register">
          <button className={styles.homeButton}>Empieza ya!</button>
        </Link>


      </div>
    </section>
  );
}
