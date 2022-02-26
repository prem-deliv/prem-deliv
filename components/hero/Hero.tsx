import Link from "next/link";
import { Button } from "@chakra-ui/react";

import styles from "../hero/Hero.module.scss";

interface Props {
  title: string;
  subTitle: string;
  btnText: string;
  btnLink: string;
}

const Hero: React.FC<Props> = ({ title, subTitle, btnLink, btnText }) => {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>{title}</h1>
        <h2 className={styles.hero__subtitle}>{subTitle}</h2>
        <Link href={btnLink}>
          <a className={styles.hero__link}>
            <Button className={styles.hero__button}>{btnText}</Button>
          </a>
        </Link>
      </section>
    </>
  );
};

export default Hero;
