import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

import styles from "../prices/Prices.module.scss";

interface Props {
  title: string;
  desc: string;
  image: string;
}

const Price: React.FC<Props> = ({ title, desc, image }) => {
  return (
    <>
      <section className={styles.prices}>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <Image className="img-fluid" src={image} alt={title} />
            </Col>
            <Col lg="6">
              <h2 className={styles.prices__title}>{title}</h2>
              <hr />
              <p>{desc}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Price;
