import styles from "./page.module.css";
import Patterns from "./patterns";

export default function Home() {
  return (
    <main className={styles.main}>
      <Patterns />
      Hallo
    </main>
  );
}
