import type { NextPage } from "next";
import Head from "next/head";
import { Container, Col, Row, Button } from "reactstrap";
import InnerHero from "../components/innerHero/InnerHero";

const Props = {
  title: "Our Service Fees",
  subTitle: "Eat Well. Support Local!",
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
              <h2>Fort Erie</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Take Out/Fast Food </td>
                    <td>$8.00</td>
                  </tr>
                  <tr>
                    <td>Take Out/Fast Food (2 Stops)</td>
                    <td>$11.00</td>
                  </tr>
                  <tr>
                    <td>Alcohol</td>
                    <td>$8.00</td>
                  </tr>
                  <tr>
                    <td>Alcohol and Fast Food</td>
                    <td>$11.00</td>
                  </tr>
                  <tr>
                    <td>LCBO + Beer Store</td>
                    <td>$11.00</td>
                  </tr>
                  <tr>
                    <td>Variety Store</td>
                    <td>$8.00</td>
                  </tr>
                  <tr>
                    <td>Grocery Store (less than $50.00)</td>
                    <td>$13.00</td>
                  </tr>
                  <tr>
                    <td>Grocery Store ($50.00 - $100.00)</td>
                    <td>$15.00</td>
                  </tr>
                </tbody>
              </table>
              <h2>Stevensville, Crystal Beach, Black Creek</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Take Out/Fast Food </td>
                    <td>$13.00</td>
                  </tr>
                  <tr>
                    <td>Take Out/Fast Food (2 Stops)</td>
                    <td>$16.00</td>
                  </tr>
                  <tr>
                    <td>Alcohol</td>
                    <td>$13.00</td>
                  </tr>
                  <tr>
                    <td>Alcohol and Fast Food</td>
                    <td>$16.00</td>
                  </tr>
                  <tr>
                    <td>LCBO + Beer Store</td>
                    <td>$16.00</td>
                  </tr>
                  <tr>
                    <td>Variety Store</td>
                    <td>$13.00</td>
                  </tr>
                  <tr>
                    <td>Grocery Store (less than $50.00)</td>
                    <td>$19.00</td>
                  </tr>
                  <tr>
                    <td>Grocery Store ($50.00 - $100.00)</td>
                    <td>$21.00</td>
                  </tr>
                </tbody>
              </table>
              <h2>Ridgeway</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Take Out/Fast Food </td>
                    <td>$12.00</td>
                  </tr>
                  <tr>
                    <td>Take Out/Fast Food (2 Stops)</td>
                    <td>$15.00</td>
                  </tr>
                  <tr>
                    <td>Alcohol</td>
                    <td>$12.00</td>
                  </tr>
                  <tr>
                    <td>Alcohol and Fast Food</td>
                    <td>$15.00</td>
                  </tr>
                  <tr>
                    <td>LCBO + Beer Store</td>
                    <td>$15.00</td>
                  </tr>
                  <tr>
                    <td>Variety Store</td>
                    <td>$12.00</td>
                  </tr>
                  <tr>
                    <td>Grocery Store (less than $50.00)</td>
                    <td>$18.00</td>
                  </tr>
                  <tr>
                    <td>Grocery Store ($50.00 - $100.00)</td>
                    <td>$20.00</td>
                  </tr>
                </tbody>
              </table>
              <a href="tel:(289) 969 1277">
                <Button>Order Now</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
