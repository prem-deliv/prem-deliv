import { Container, Row, Col } from "reactstrap";

import styles from "../innerHero/InnerHero.module.scss";

interface Props {
  title: string;
  subTitle: string;
}

const InnerHero: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <section className={styles["inner-hero"]}>
        <Container>
          <Row>
            <Col lg="12">
              <h1 className={styles["inner-hero__title"]}>{title}</h1>
              <hr />
              <p className={styles["inner-hero__subtitle"]}>{subTitle}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InnerHero;
