import Image from "next/image";
import { Container } from "../ui/Container";
import styles from "./ApproachSection.module.css";
import { SectionDivider } from "@/components/ui/SectionDivider";

type BranchClass =
  | "branchFarLeft"
  | "branchNearLeft"
  | "branchNearRight"
  | "branchFarRight";

const approachItems = [
  {
    label: "PREVENT",
    frameSrc: "/background/ourvision/Group%20206.png",
    iconSrc: "/background/ourvision/image11%201.png",
    iconAlt: "Prevent",
    iconSize: 52,
    branchSrc: "/background/ourvision/Vector%2045.png",
    branchWidth: 379,
    branchHeight: 107,
    branchClass: "branchFarLeft" as BranchClass
  },
  {
    label: "PROTECT",
    frameSrc: "/background/ourvision/Group%20207.png",
    iconSrc: "/background/ourvision/image11%202.png",
    iconAlt: "Protect",
    iconSize: 50,
    branchSrc: "/background/ourvision/Vector%2044.png",
    branchWidth: 900,
    branchHeight: 90,
    branchClass: "branchNearLeft" as BranchClass
  },
  {
    label: "DETECT",
    frameSrc: "/background/ourvision/Group%20208.png",
    iconSrc: "/background/ourvision/image11%203.png",
    iconAlt: "Detect",
    iconSize: 62
  },
  {
    label: "RESPOND",
    frameSrc: "/background/ourvision/Group%20209.png",
    iconSrc: "/background/ourvision/image11%204.png",
    iconAlt: "Respond",
    iconSize: 62,
    branchSrc: "/background/ourvision/Vector%2046.png",
    branchWidth: 900,
    branchHeight: 90,
    branchClass: "branchNearRight" as BranchClass
  },
  {
    label: "RECOVER",
    frameSrc: "/background/ourvision/Group%20210.png",
    iconSrc: "/background/ourvision/image11%205.png",
    iconAlt: "Recover",
    iconSize: 54,
    branchSrc: "/background/ourvision/Vector%2047.png",
    branchWidth: 379,
    branchHeight: 107,
    branchClass: "branchFarRight" as BranchClass
  }
];

export function ApproachSection() {
  return (
    
    <section className={styles.section}>
      
      <Container>
        <h2 className={styles.eyebrow}>KEYSTONE&apos;S APPROACH</h2>

        <div className={styles.diagram}>
          <div className={styles.centerHex}>
            <Image
              src="/background/ourvision/Vector%2040.png"
              alt=""
              fill
              className={styles.centerFrame}
            />
            <Image
              src="/background/ourvision/Mask%20group.png"
              alt=""
              fill
              className={styles.centerAccent}
            />
            <Image
              src="/background/ourvision/Group.png"
              alt="Keystone logo"
              width={85}
              height={97}
              className={styles.centerMark}
            />
          </div>

          <div className={styles.nodes}>
            {approachItems.map((item) => (
              <div key={item.label} className={styles.node}>
                {item.branchSrc && item.branchClass ? (
                  <Image
                    src={item.branchSrc}
                    alt=""
                    width={item.branchWidth}
                    height={item.branchHeight}
                    className={`${styles.branchConnector} ${styles[item.branchClass]}`}
                  />
                ) : null}

                {item.label === "DETECT" ? (
                  <Image
                    src="/background/ourvision/Vector%2043.png"
                    alt=""
                    width={2}
                    height={76}
                    className={styles.connectorCenter}
                  />
                ) : null}

                <span className={styles.nodeDot} aria-hidden="true" />

                <div className={styles.nodeHex}>
                  <Image
                    src={item.frameSrc}
                    alt=""
                    fill
                    className={styles.nodeFrame}
                  />
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={item.iconSize}
                    height={item.iconSize}
                    className={styles.nodeIcon}
                  />
                </div>

                <p className={styles.nodeLabel}>{item.label}</p>
                <span className={styles.nodeAccent} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
