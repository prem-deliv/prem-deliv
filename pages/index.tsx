import type { NextPage } from "next";
import Head from "next/head";

import Navigation from "../components/shared/nav/Navigation";
import Hero from "../components/hero/Hero";

const heroProps = {
  title: "Best Food Delivery in Fort Erie",
  subTitle: "Fast, Friendly, Efficient",
  btnText: "View Services",
  btnLink: "/services",
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
      <Navigation />
      <Hero {...heroProps} />
    </>
  );
};

export default Home;
