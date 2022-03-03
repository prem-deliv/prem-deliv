import { Container, Row, Col } from "reactstrap";

import styles from "../intro/Intro.module.scss";

interface Props {
  title: string;
  desc: string;
}

const Intro: React.FC<Props> = ({ title, desc }) => {
  return (
    <>
      <section className={styles.intro}>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className={styles.intro__title}>{title}</h2>
              <hr />
              <p>{desc}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
