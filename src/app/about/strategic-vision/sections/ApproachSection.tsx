"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/Container";
import styles from "./ApproachSection.module.css";

export function ApproachSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className={styles.section}>
      <Container>
        <h2 className={styles.eyebrow}>KEYSTONE&apos;S APPROACH</h2>

        <div className={styles.imageWrapper}>
          <Image
            src="/background/approach.png"
            alt="Keystone Approach Diagram"
            width={1200}
            height={800}
            className={styles.approachImage}
          />
        </div>
      </Container>
    </motion.section>
  );
}
