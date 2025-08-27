import Patterns from "./patterns";
import Image from "next/image";
import Form from "./form";

import { inconsolata } from "./ui/fonts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Patterns />
      <Image
        src="/logo/logo-full.svg"
        className={styles.logo}
        width={230}
        height={30}
        alt="Logo company"
      />
      <Form />
    </main>
  );
}
