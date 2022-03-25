import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

import styles from "../services/Services.module.scss";

interface Props {
  title: string;
  headingOne: string;
  iconOne: string;
  headingTwo: string;
  iconTwo: string;
  headingThree: string;
  iconThree: string;
}

const Services: React.FC<Props> = ({
  title,
  headingOne,
  iconOne,
  headingTwo,
  iconTwo,
  headingThree,
  iconThree,
}) => {
  return (
    <>
      <section className={styles.services}>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className={styles.services__title}>{title}</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Image
                className="img-fluid"
                src={iconOne}
                width="400px"
                height="400px"
                alt={headingOne}
              />
              <h3>{headingOne}</h3>
            </Col>
            <Col lg="4">
              <Image
                className="img-fluid"
                src={iconTwo}
                width="400px"
                height="400px"
                alt={headingTwo}
              />
              <h3>{headingTwo}</h3>
            </Col>
            <Col lg="4">
              <Image
                className="img-fluid"
                src={iconThree}
                width="400px"
                height="400px"
                alt={headingThree}
              />
              <h3>{headingThree}</h3>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Link href="/services">
                <Button>View All Services</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
