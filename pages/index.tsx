import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import Services from "../components/services/Services";
import Price from "../components/prices/Price";

import serviceOneImage from "../public/service-1.svg";
import serviceTwoImage from "../public/service-2.svg";
import serviceThreeImage from "../public/service-3.svg";
import deliveryImage from "../public/fort-erie-food-delivery-prices.jpg";

const heroProps = {
  title: "Fort Erie’s Best Food Delivery Service",
  bizName: "Premium Delivery",
  subTitle: "Fast - Friendly - Efficient",
  btnText: "View Services",
  btnLink: "/services",
};

const introProps = {
  title: "Fort Erie Food Delivery",
  subTitle:
    "Tired Of Talking To A Machine? Get Everything You Want In A Single Call",
  desc: (
    <>
      We are Fort Erie’s go-to food delivery company. From your weekly grocery
      run to your preferred nightcap from the LCBO and epic munchie cravings, we
      have you covered! Your favourites- delivered in as little as 1 hour!
      <br />
      <br />
    </>
  ),
  order: (
    <>
      <strong>Ordering with us is simple</strong>
      <ol>
        <li>
          Call us at <a href="tel:289-969-1277">289-969-1277</a>.
        </li>
        <li>Place your order.</li>
        <li>Do something fun while we bring everything right to your door! </li>
      </ol>
    </>
  ),
  free: (
    <>
      Free time is at a premium these days, so give yourself a break and let us
      deliver everything you need. We treat every order like we’re shopping for
      our own family. Nothing is more convenient than direct to your door
      Premium Delivery.
    </>
  ),
  btnLink: "tel:289-969-1277",
  btnText: "Call Us Today",
};

const servicesProps = {
  title: "Our Food Delivery Services in Fort Erie",
  headingOne: "Grocery",
  iconOne: serviceOneImage,
  headingTwo: "Takeout",
  iconTwo: serviceThreeImage,
  headingThree: "Alcohol (19+)",
  iconThree: serviceTwoImage,
};

const deliveryProps = {
  title: "Hours of Operation",
  desc: (
    <>
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
    </>
  ),
  image: deliveryImage,
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Best Food Delivery Fort Erie | Premium Delivery</title>
        <meta
          name="description"
          content="We are the best food delivery service in Fort Erie with the best prices around. Click here to learn more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...heroProps} />
      <Intro {...introProps} />
      <Services {...servicesProps} />
      <Price {...deliveryProps} />
    </>
  );
};

export default Home;
