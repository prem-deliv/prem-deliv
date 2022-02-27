import { Container } from "@chakra-ui/react";

import styles from "../intro/Intro.module.scss";

interface Props {
  title: string;
  desc: string;
}

const Intro: React.FC<Props> = ({ title, desc }) => {
  return (
    <>
      <section className={styles.intro}>
        <Container maxW="container.lg">
          <h2 className={styles.intro__title}>{title}</h2>
          <hr />
          <p>{desc}</p>
        </Container>
      </section>
    </>
  );
};

export default Intro;
