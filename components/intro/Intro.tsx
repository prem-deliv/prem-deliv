import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

import styles from "../intro/Intro.module.scss";

interface Props {
  title: string;
  subTitle: string;
  desc: any;
  order: any;
  free: any;
  btnLink: string;
  btnText: string;
}

const Intro: React.FC<Props> = ({
  title,
  subTitle,
  desc,
  order,
  free,
  btnLink,
  btnText,
}) => {
  return (
    <>
      <section className={styles.intro}>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className={styles.intro__title}>{title}</h2>
              <h4>{subTitle}</h4>
              <hr />
              <p id={styles.desc}>{desc}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <p>{order}</p>
            </Col>
            <Col lg="6">
              <p>{free}</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="12">
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

export default Intro;
