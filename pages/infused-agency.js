import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Container, Col, Row, Button } from "reactstrap";
import InnerHero from "../components/innerHero/InnerHero";
import img from "../public/infused-agency.webp";

const Props = {
  title: "Infused Agency",
  subTitle: "",
};

const Infused = () => {
  return (
    <>
      <Head>
        <title>Infused Agency - Premium Delivery</title>
        <meta
          name="description"
          content="Infused Agency designed and built Premium Delivery's website. Click here to learn more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero {...Props} />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Website Design, Development &amp; Search Engine Optimization</h2>
              <p>
                Since our establishment in 2013, we have supported a broad spectrum of enterprises in St. Catharines,
                Niagara, and beyond, ranging from local businesses to large corporations. Our proficiency covers website
                design, digital marketing, SEO, WordPress development, and e-commerce.
                <br />
                <br />
                We have played a pivotal role in enhancing the online presence of our clients, catalyzing business
                expansion through strategic digital solutions. Whether it's optimizing websites for search engines,
                crafting visually appealing WordPress sites, or implementing effective e-commerce platforms, our team
                consistently achieves impactful results.
                <br />
                <br />
                Our dedication to local businesses is evident in a diverse array of success stories. We have not only
                augmented website traffic but also designed modern, responsive websites in line with contemporary design
                trends. Our customized solutions have substantially elevated revenue for businesses of all scales.
                <br />
                <br />
                Since 2013, our journey has been characterized by a fervent commitment to empowering businesses through
                comprehensive digital strategies, reshaping online landscapes, and fostering success in the competitive
                digital arena.
                <br />
                <br />
                <a href="https://infused.agency" target="_blank">
                  Niagara Web Design
                </a>{" "}
                Website by Infused Agency
              </p>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={img} alt="infused agency" />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h2>Why Infused Agency?</h2>
              <h3>Proven Excellence in Website Design</h3>
              <p>
                Why settle for a web design firm that fails to elevate your business? Opt for Infused Agency, where our
                adept team excels at creating impactful websites and implementing strategies for sustainable business
                growth. With a proven track record dating back to 2013, we have consistently propelled numerous
                businesses to success. Rest assured, our expertise is tailored to make a positive impact.
              </p>

              <h3>Unparalleled Craftsmanship in Website Design</h3>
              <p>
                Amidst the myriad of web designers, our approach stands out. We meticulously handcraft each website,
                avoiding ready-made templates. Our emphasis is on ensuring security, exceptional speed, and a
                distinctive appearance for every site. By employing the latest techniques, our websites stand out for
                their top-notch quality and uniqueness.
              </p>

              <h3>Rapid and Punctual Delivery</h3>
              <p>
                We recognize the urgency of your business needs, prioritizing swift and effective website development.
                From our initial discussions to presenting the design and ultimately launching the website, we maintain
                constant communication to ensure seamless alignment. Addressing your queries promptly, we guarantee that
                your website is ready precisely when you need it. Timely delivery is our commitment!
              </p>
              <h2>Schedule A Free Consulation</h2>

              <p>
                Click the link below to schedule your free consultation in order to get a free website or SEO quote:
              </p>
              <a href="https://calendly.com/infused-agency/project-discovery/" target="_blank">
                <Button>Free Consulation</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Infused;
