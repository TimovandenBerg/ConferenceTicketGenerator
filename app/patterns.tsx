import styles from "./patterns.module.css";
import Image from "next/image";

export default function Patterns() {
  return (
    <>
      <Image
        src="/patterns/pattern-lines.svg"
        width={1024}
        height={1459}
        className={styles.lines}
        alt="lines pattern background"
      />
      <Image
        src="/patterns/pattern-squiggly-line-bottom-mobile-tablet.svg"
        width={760}
        height={530}
        className={styles.squigglyLineBottomMobileTablet}
        alt="squiggly line bottom pattern background"
      />
      <Image
        src="/patterns/pattern-squiggly-line-bottom-desktop.svg"
        width={825}
        height={400}
        className={styles.squigglyLineBottomDesktop}
        alt="squiggly line bottom pattern background"
      />
      <Image
        src="/patterns/pattern-squiggly-line-top.svg"
        width={446}
        height={208}
        className={styles.lineTop}
        alt="squiggly line top right pattern background"
      />
      <Image
        src="/patterns/pattern-circle.svg"
        width={217}
        height={217}
        className={styles.topCircle}
        alt="transparent top circle pattern background"
      />
      <Image
        src="/patterns/pattern-circle.svg"
        width={217}
        height={217}
        className={styles.midCircle}
        alt="transparent middle circle pattern background"
      />
    </>
  );
}
