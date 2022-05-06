import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { Container, Col, Row } from "reactstrap";
import InnerHero from "../components/innerHero/InnerHero";

const Props = {
  title: "About Us",
  subTitle: "",
};

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Premium Delivery</title>
        <meta
          name="description"
          content="Premium Delivery is a call-to-order grocery, food, and drink delivery service. We serve Fort Erie proper, Stevensville, Crystal Beach, and Ridgeway."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero {...Props} />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                <Link href="/">Premium Delivery</Link> is a call-to-order
                grocery, food, and drink delivery service. We serve Fort Erie
                proper, Stevensville, Crystal Beach, and Ridgeway.
              </p>
              <p>
                Life has never been busier, and you deserve a little break.
                Premium Delivery gives you back the time to do the things you
                really want to do! Relax with your family, or play the newest
                game, while we do all the work.
              </p>
              <p>
                Enjoy any of your local favourites! You can even order from
                multiple places and have them delivered at the same time.
                Groceries from the big stores, or snacks from the corner
                variety- We have you covered.
              </p>
              <p>
                Premium Delivery does its best to provide fast, friendly, and
                efficient deliveries. Delivery times aren&apos;t guaranteed.
                Inclement weather, traffic delays, and other unforeseen
                circumstances may affect our services. We do our best to
                communicate any and all delays so you&apos;re never left
                wondering where your orders are.
              </p>
              <h2>FAQs</h2>
              <p>
                <strong>How do I order home delivery?</strong>
              </p>
              <p>
                We make it as simple as possible. Simply call our service
                number, place your order, and we&apos;ll do all the work!
              </p>
              <p>
                <strong>Where can I order food from?</strong>
              </p>
              <p>
                Anywhere you&apos;d like! We&apos;ll pick up, and deliver, from
                any grocery, variety, restaurant, or fast food establishment in
                the Greater Fort Erie area.{" "}
              </p>
              <p>
                <strong>
                  Can I get home delivery for the LCBO or Beer Store?
                </strong>
              </p>
              <p>
                Yes, you can! You can also add a stop to any food delivery
                order. Photo ID required (19+)
              </p>
              <p>
                <strong>What are your delivery hours?</strong>
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>11:00am- 9:00pm</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>11:00am- 9:00pm</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>11:00am- 9:00pm</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>11:00am- 9:00pm</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>11:00am- 9:00pm</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>11:00am- 9:00pm</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>CLOSED</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>What happens when something is unavailable?</strong>
              </p>
              <p>
                We pride ourselves on personalized services. If we can&apos;t
                get what you want, and you haven&apos;t told us substitutions,
                we will call you to ask what you&apos;d like instead. You choose
                what you want and don&apos;t want.{" "}
              </p>
              <p>
                <strong>How can I pay?</strong>
              </p>
              <p>We offer a variety of payment options. We take:</p>
              <ul>
                <li>Interac/Debit</li>
                <li>Mastercard</li>
                <li>Visa</li>
                <li>American Express</li>
                <li>Apple Pay</li>
                <li>Google Pay</li>
                <li>PayPal</li>
                <li>E-transfers</li>
                <li>Cash</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
