"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/Container";
import { MeshBackground } from "../ui/MeshBackground";
import { ParagraphStack } from "../ui/ParagraphStack";
import styles from "./StrategySection.module.css";

const paragraphs = [
  "At Keystone, our strategy is built on a proactive, intelligence-driven approach designed to stay ahead of emerging cyber threats.",
  "We combine deep technical expertise, continuous threat monitoring, and industry-specific insights to deliver security solutions that are both effective and sustainable.",
  "By aligning our methods with international standards and adapting them to each client's operational reality, we ensure long-term protection, resilience, and strategic readiness in an ever-evolving digital landscape."
];

export function StrategySection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title}>
              <span className={styles.marker}>▪</span>
              <span>OUR STRATEGY</span>
            </h2>

            <ParagraphStack paragraphs={paragraphs} />
          </div>

          <div className={styles.visual}>
            <div className={styles.frame}>
              <Image
                src="/background/Rectangle 59.png"
                alt="Cybersecurity interface over a laptop"
                fill
                priority
                sizes="(max-width: 460px) 100vw, 42vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <MeshBackground className={styles.mesh} />
      </Container>
    </motion.section>
  );
}
