import Image from "next/image";

import styles from "./patterns.module.css";

export default function Patterns() {
  return (
    <>
      <Image
        src="/patterns/pattern-lines.svg"
        width={1024}
        height={1459}
        className={`${styles.lines} ${styles.pattern}`}
        alt="lines pattern background"
      />
      <Image
        src="/patterns/pattern-squiggly-line-bottom-mobile-tablet.svg"
        width={760}
        height={530}
        className={`${styles.squigglyLineBottomMobileTablet} ${styles.pattern}`}
        alt="squiggly line bottom pattern background"
      />
      <Image
        src="/patterns/pattern-squiggly-line-bottom-desktop.svg"
        width={825}
        height={400}
        className={`${styles.squigglyLineBottomDesktop} ${styles.pattern}`}
        alt="squiggly line bottom pattern background"
      />
      <Image
        src="/patterns/pattern-squiggly-line-top.svg"
        width={446}
        height={208}
        className={`${styles.lineTop} ${styles.pattern}`}
        alt="squiggly line top right pattern background"
      />
      <Image
        src="/patterns/pattern-circle.svg"
        width={217}
        height={217}
        className={`${styles.topCircle} ${styles.pattern}`}
        alt="transparent top circle pattern background"
      />
      <Image
        src="/patterns/pattern-circle.svg"
        width={217}
        height={217}
        className={`${styles.midCircle} ${styles.pattern}`}
        alt="transparent middle circle pattern background"
      />
    </>
  );
}
