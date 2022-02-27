import type { NextPage } from "next";
import Head from "next/head";

import Navigation from "../components/shared/nav/Navigation";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Premium Delivery</title>
        <meta name="description" content="Desc goes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <h1>About</h1>
    </>
  );
};

export default About;
