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
  title: "Best Food Delivery in Fort Erie",
  subTitle: "Fast, Friendly, Efficient",
  btnText: "View Services",
  btnLink: "/services",
};

const introProps = {
  title: "Premium Delivery - Fort Erie Food Delivery",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet nunc sit amet laoreet consequat. Nam fermentum, felis sit amet lacinia sollicitudin, odio leo sagittis metus, eu molestie erat leo in massa. Cras quis feugiat lacus. Suspendisse a eros consequat, consectetur neque eget.",
};

const servicesProps = {
  title: "Our Food Delivery Services in Fort Erie",
  headingOne: "Take Out Food",
  iconOne: serviceOneImage,
  headingTwo: "Alcohol (19+)",
  iconTwo: serviceTwoImage,
  headingThree: "Fast Food",
  iconThree: serviceThreeImage,
};

const deliveryProps = {
  title: "Fort Erie Food Delivery Prices",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet nunc sit amet laoreet consequat. Nam fermentum, felis sit amet lacinia sollicitudin, odio leo sagittis metus, eu molestie erat leo in massa. Cras quis feugiat lacus. Suspendisse a eros consequat, consectetur neque eget.",
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
