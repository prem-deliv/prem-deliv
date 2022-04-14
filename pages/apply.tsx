import type { NextPage } from "next";
import Head from "next/head";
import { Container, Col, Row } from "reactstrap";
import InnerHero from "../components/innerHero/InnerHero";

const Props = {
  title: "Work With Us!",
  subTitle: "",
};

const Apply: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apply - Premium Delivery</title>
        <meta
          name="description"
          content="There’s a reason we’re called Premium Delivery- We deliver premium results. This company was started to fill the needs we saw in our community.
"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero {...Props} />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                There’s a reason we’re called Premium Delivery- We deliver
                premium results. This company was started to fill the needs we
                saw in our community. Not everyone can, or wants to, get out and
                shop for the things they need. We provide a safe, friendly,
                efficient, and reliable source for groceries, drinks, and
                take-out.
              </p>
              <p>
                We deliver to residents of Fort Erie, as well as to tourists
                that just want to enjoy their vacations, so they can enjoy their
                free time without the stresses of shopping.
              </p>
              <p>
                If you want the added benefit of giving back to your community
                while working for a great company, apply today!
              </p>
              <p>
                <strong>The following positions are available:</strong>
              </p>
              <p>
                <em>Delivery Driver (Contract)</em>
              </p>
              <p>
                <strong>Requirements:</strong>
              </p>
              <ul>
                <li>Eligible to work in Canada</li>
                <li>Smart Serve Certified</li>
                <li>Valid Driver’s licence</li>
                <li>Must have, and use your own vehicle</li>
                <li>Provide us with a satisfactory Driver’s Abstract</li>
                <li>Maintain up to date Auto Insurance</li>
              </ul>
              <p>
                <strong>Your role/duties:</strong>
              </p>
              <ul>
                <li>
                  You will be expected to be available during your scheduled
                  shifts to be dispatched to and from assigned deliveries.
                </li>
                <li>Act as a personal shopper for grocery orders.</li>
                <li>
                  You will be provided with all information needed to complete
                  your deliveries.
                </li>
                <li>
                  It is expected that you maintain an adequate cash float.
                </li>
                <li>Be helpful and friendly to all of our clients.</li>
              </ul>
              <p>
                <strong>Compensation:</strong>
              </p>
              <p>Paid per delivery, plus gratuities.</p>
              <p>
                <strong>How To Apply:</strong>
              </p>
              <p>
                Those interested in applying are asked to submit a resume to{" "}
                {""}
                <a href="mailto:premiumdelivery10@gmail.com">
                  premiumdelivery10@gmail.com
                </a>
                . ​Only qualified applicants will be contacted for an interview.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Apply;
