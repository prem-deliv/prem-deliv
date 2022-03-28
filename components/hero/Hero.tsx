import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";

import styles from "../hero/Hero.module.scss";

interface Props {
  title: string;
  bizName: string;
  subTitle: string;
  btnText: string;
  btnLink: string;
}

const Hero: React.FC<Props> = ({
  title,
  bizName,
  subTitle,
  btnLink,
  btnText,
}) => {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <Row>
            <Col lg="12">
              <h1 className={styles.hero__title}>{title}</h1>
              <p className={styles.hero__biz}>{bizName}</p>
              <h2 className={styles.hero__subtitle}>{subTitle}</h2>
              <Link href={btnLink}>
                <a className={styles.hero__link}>
                  <Button className={styles.hero__button}>{btnText}</Button>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
