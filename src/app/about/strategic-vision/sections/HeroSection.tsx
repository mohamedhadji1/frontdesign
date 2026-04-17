import React from 'react';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Strategic Vision</h1>
        <p className={styles.subtitle}>
          Communicates long-term direction and thought leadership.
        </p>
        <div className={styles.buttonGroup}>
          <a href="/contact" className={styles.primaryButton}>
            Get Security Assessment <span className={styles.arrow}>→</span>
          </a>
          <a href="/contact" className={styles.secondaryButton}>
            Emergency Response
          </a>
        </div>
      </div>
    </section>
  );
}