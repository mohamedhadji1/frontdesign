"use client";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { MeshBackground } from "../ui/MeshBackground";
import { PrimaryButton } from "../ui/PrimaryButton";
import styles from "./CtaSection.module.css";

export function CtaSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title}>Ready to Work with the Best?</h2>
            <p className={styles.description}>
              Join hundreds of satisfied clients who trust Keystone to protect
              their most valuable digital assets.
            </p>
          </div>

          <div className={styles.action}>
            <PrimaryButton label="Request Service Now" />
          </div>
        </div>

        <MeshBackground className={styles.mesh} />
      </Container>
    </motion.section>
  );
}
