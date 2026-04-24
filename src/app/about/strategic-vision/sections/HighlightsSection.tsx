"use client";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { HighlightCard } from "../ui/HighlightCard";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import styles from "./HighlightsSection.module.css";

export function HighlightsSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className={styles.section}>
      <Container>
        <SectionEyebrow label="HIGHLIGHTS" />

        <div className={styles.grid}>
          <HighlightCard
            imageSrc="/images/highlight-expertise.png"
            title="Our Leadership & Expertise"
          />

          <HighlightCard
            imageSrc="/images/highlight-vision.png"
            title="Our Strategic Vision"
            accent={false}
          />
        </div>
      </Container>
    </motion.section>
  );
}
