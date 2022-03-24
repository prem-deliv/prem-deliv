import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";

import styles from "../footer/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg="9">
              <h2>Contact Us Today</h2>
              <p className="sub">
                We’re here to help with your delivery needs.
              </p>
            </Col>
            <Col lg="3">
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </Col>
          </Row>
          <Row className="top">
            <Col lg="3">
              <p>
                P.O Box 1410 Garrison
                <br />
                P.O Fort Erie Ontario L2A6G2
              </p>
            </Col>
            <Col lg="3">
              <a href="tel:(289) 969 1277">(289) 969 1277</a>
            </Col>
            <Col lg="3">
              <a href="mailto:premiumdelivery10@gmail.com">
                premiumdelivery10@gmail.com
              </a>
            </Col>
            <Col lg="3">
              <p>
                &copy; 2022 Premium Delivery. <br />
                All Rights Reserved.
              </p>
              <p>
                <a href="https://infused.agency">
                  Niagara SEO &amp; Web Design
                </a>{" "}
                by Infused Agency
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
