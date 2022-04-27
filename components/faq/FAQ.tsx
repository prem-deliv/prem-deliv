import { Container, Row, Col, Button } from "reactstrap";

import styles from "../faq/FAQ.module.scss";

const FAQ = () => {
  return (
    <>
      <section className={styles.seoContent}>
        <Container>
          <Row>
            <Col lg="12">
              <h3>
                What Makes Premium Delivery the Best Food Delivery Service in
                Fort Erie?
              </h3>
              <p>
                We think that customer experiences should be the key focus of
                any good food delivery service, and at Premium Delivery that it
                is our top priority. Our successful business management team
                ensures that our day to day operations run smoothly, which means
                you get exactly what you order in the least amount of time
                possible. We are a locally owned, and operated, business so our
                drivers know every spot you could order from, which makes us the
                best food delivery service in Fort Erie.
              </p>
              <h3>Why Is Choosing a Good Food Delivery Company Important?</h3>
              <p>
                You need to trust that who you hire will take the utmost care
                when picking up your orders and choosing fresh, quality
                ingredients- You can even request the ripeness of your produce
                if you have specific preferences. Our personal shoppers and
                delivery drivers have been trained and vetted to ensure your
                orders are correct and delivered in a timely manner. When you
                choose us, you’re choosing Fort Erie’s best food delivery
                service.
              </p>
              <h3>When Should I Choose to Use a Food Delivery Service?</h3>
              <p>
                The reasons to use a good food delivery service in Fort Erie
                will vary from person to person and day by day. Premium Delivery
                aims to make every person&#39;s day easier and less stressful-
                no matter what that reason may be.
              </p>
              <p>
                Sometimes you don’t have use of a car, or can not drive safely.
                Our services are less expensive than taking a taxi, as well as
                more convenient. You can enjoy more special moments in your life
                or spend more quality time with family and friends while we do
                the work.
              </p>
              <h3>What Food Delivery Services Do We Offer?</h3>
              <p>
                We offer a wide variety of food delivery services in Greater
                Fort Erie.
              </p>
              <ul>
                <li>
                  Fast Food from any establishment (McDonalds, Tim Hortons,
                  Wendys, and more)
                </li>
                <li>Takeout from any restaurant in the supported area</li>
                <li>
                  Variety Store trips (We will get anything you need, including
                  tobacco if 19+)
                </li>
                <li>Grocery Shopping</li>
                <li>LCBO and Beer Store (19+)</li>
              </ul>
              <section className={styles.faq}>
                <h2>Frequently Asked Questions</h2>
                <h3>How fast do you deliver?</h3>
                <p>
                  Premium Delivery specializes in same day service- often in as
                  little as 1 hour! Larger grocery shops, and multiple store
                  stops will take a little longer, but we get your food to you
                  in as little time as possible.
                </p>
                <h3>How can I pay?</h3>
                <p>
                  We want our food delivery services in Fort Erie to be
                  available to everyone who needs, or wants, it which is why we
                  accept all major payment methods.
                </p>
                <ul>
                  <li>Mastercard</li>
                  <li>American Express</li>
                  <li>Google Pay</li>
                  <li>PayPal</li>
                  <li>Cash</li>
                  <li>Visa</li>
                  <li>Interac/Debit</li>
                  <li>Apple Pay</li>
                  <li>E-transfers</li>
                </ul>
                <h3>Do you deliver to hotels, motels, and rentals (Airbnb)?</h3>
                <p>
                  You should be able to enjoy your vacation without the added
                  time taken away for grocery and food services, especially when
                  you’re unfamiliar with the area. We’ll deliver to any location
                  in the greater Fort Erie area so you can sit back and relax,
                  or experience the wonders that Fort Erie has to offer.
                </p>
                <h3>Do you deliver alcohol?</h3>
                <p>
                  We require that anyone who orders alcohol be of legal drinking
                  age in Ontario (19+), and have a government issued photo ID to
                  show our drivers when they deliver to your door. You can order
                  from the LCBO and Beer Store as a single order, or add the
                  alcohol of your choice to any other Fort Erie food delivery
                  services we offer. We take wine and dine to a whole new level
                  by bringing it directly to your location of choice.
                </p>
                <h3>Do you deliver tobacco?</h3>
                <p>
                  We deliver anything you’d like from variety stores including
                  tobacco. We do require that you have a government issued photo
                  ID to present to our delivery driver to ensure that you are
                  19+ and of legal age to acquire tobacco products.
                </p>
                <h3>Can I order online?</h3>
                <p>
                  While we understand that online ordering is convenient, we
                  want to focus on getting you exactly what you want which is
                  why we currently only offer phone services. You’ll speak to
                  someone directly so that we can confirm that we have all the
                  details we need to make sure your orders are correct every
                  time.
                </p>
                <h3>What happens if something is out of stock?</h3>
                <p>
                  You can specify whether you’re open to substitution, but if
                  there’s something your delivery person can not get you will be
                  called directly if there are options for you to choose from.
                  As the best food delivery service in Fort Erie, your
                  satisfaction is what is most important to us.
                </p>
                <h3>How do I report a problem with my order?</h3>
                <p>
                  If you have any issues with your order, please contact us
                  right away. Call us at 1-289-969-1277 and one of our
                  representatives will take care of your concerns immediately.
                </p>
                <h3>Who will deliver my order?</h3>
                <p>
                  All our drivers are handpicked and vetted. We require everyone
                  who works for us to be reliable, trustworthy, professional,
                  efficient, and friendly so you can trust the person walking up
                  to your door. When you order food delivery in Fort Erie, hire
                  the best!
                </p>
                <h3>Should I tip my personal shopper/delivery driver?</h3>
                <p>
                  Tips are not required, but our delivery personnel would
                  appreciate recognition of their hard work. Your driver keeps
                  100% of the tips they receive. You can tip your drivers
                  through any payment option you choose.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
