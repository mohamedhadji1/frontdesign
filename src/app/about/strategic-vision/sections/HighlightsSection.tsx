import { Container } from "../ui/Container";
import { HighlightCard } from "../ui/HighlightCard";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import styles from "./HighlightsSection.module.css";

export function HighlightsSection() {
  return (
    <section className={styles.section}>
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
    </section>
  );
}
