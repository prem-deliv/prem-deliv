import type { NextPage } from "next";
import Head from "next/head";
import { Container, Col, Row } from "reactstrap";
import InnerHero from "../components/innerHero/InnerHero";

const Props = {
  title: "Contact Us",
  subTitle: "We’d love to hear from you! ",
};

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Premium Delivery</title>
        <meta name="description" content="Desc goes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero {...Props} />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                Give us a call to place your order, or let us know of any issues
                you may be experiencing.{" "}
              </p>
              <p>
                Phone: <a href="tel:289-969-1277">289-969-1277</a>
              </p>
              <p>
                Premium Delivery- Fast - Friendly - Efficient Everything you
                could want in a food delivery service. Owned and Operated out of
                Fort Erie, Ontario, Canada
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
