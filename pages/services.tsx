import type { NextPage } from "next";
import Head from "next/head";
import { Container, Col, Row, Button } from "reactstrap";
import InnerHero from "../components/innerHero/InnerHero";

const Props = {
  title: "Premium Delivery - Premium Services ",
  subTitle:
    "Rely on us to deliver all your needs within the Greater Fort Erie area",
};

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Services - Premium Delivery</title>
        <meta name="description" content="Desc goes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero {...Props} />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <ul>
                <li>Grocery</li>
                <li>Variety Store</li>
                <li>Take Out (up to 2 stops)</li>
                <li>Fast Food (up to 2 stops)</li>
                <li>Alcohol/Tobacco (19+ with Valid ID**</li>
              </ul>
              <p>
                We deliver your orders to your home, office, or choice of
                destination within our service area.
              </p>
              <a href="tel:(289) 969 1277">
                <Button>Call Now</Button>
              </a>
              <br />
              <br />
              <p>
                <sup>**</sup>You must be 19+ for any LCBO, Beer Store, or
                tobacco orders. All such orders require in-person delivery with
                provided government-issued photo ID. If you can not provide ID
                at the time of delivery, you may be charged a return delivery
                fee.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
