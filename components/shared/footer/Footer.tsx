import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import styles from "../footer/Footer.module.scss";
import twitter from "../../../public/twitter.png";
import fb from "../../../public/facebook.png";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg="9">
              <h2>Call Us Today</h2>
              <p className={styles.sub}>
                Premium Delivery. Premium Services. Here To Help With All Your Delivery Needs.
              </p>
            </Col>
            <Col lg="3">
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </Col>
          </Row>
          <Row className={styles.top}>
            <Col lg="3">
              <p>
                P.O Box 1410 Garrison
                <br />
                P.O Fort Erie Ontario L2A6G2
              </p>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/PremiumDeliver">
                Visit Our Twitter
              </a>
              <span>|</span>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Premium-Delivery-101259482496941">
                Visit Our Facebook
              </a>
              <p>
                Website by <Link href="/infused-agency">Infused Agency</Link>
              </p>
            </Col>
            <Col lg="3">
              <a href="tel:(289) 969 1277">(289) 969 1277</a>
            </Col>
            <Col lg="3">
              <a href="mailto:premiumdelivery10@gmail.com">premiumdelivery10@gmail.com</a>
            </Col>
            <Col lg="3">
              <p>
                &copy; 2022 Premium Delivery. <br />
                All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
