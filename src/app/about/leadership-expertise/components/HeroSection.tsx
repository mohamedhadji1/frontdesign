"use client";
import { motion } from "framer-motion";
import React from 'react';
import styles from './HeroSection.module.css';
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function HeroSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Leadership & Expertise</h1>
        <HeroTypeLine
          items={["Technical depth", "Strategic leadership", "Hands-on cyber expertise"]}
          className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-400"
        />
        <p className={styles.subtitle}>
          A team of seasoned cybersecurity experts guiding Keystone with strong technical knowledge and strategic vision.
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
      <ScrollIndicator/>
    </motion.section>
  );
}
