import { Container, Row, Col, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";

import styles from "../prices/Prices.module.scss";

interface Props {
  title: string;
  desc: any;
  image: any;
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
            <Col
              lg={{
                offset: 1,
                size: 5,
              }}
            >
              <h2 className={styles.prices__title}>{title}</h2>
              <hr />
              {desc}
              <Link href="/service-fees">
                <Button>Food Delivery Prices</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Price;
