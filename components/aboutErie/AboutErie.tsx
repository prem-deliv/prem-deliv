import { Container, Row, Col, Button } from "reactstrap";

import styles from "../aboutErie/AboutErie.module.scss";

const AboutErie = () => {
  return (
    <>
      <section className={styles.aboutErie}>
        <Container>
          <Row>
            <Col lg="12">
              <h2>About Fort Erie</h2>
              <p>
                Fort Erie is a town in the Niagara Region of Ontario, Canada.
                Sitting right across the river from Buffalo, New York, it is the
                home of Old Fort Erie, originally built in 1764 and utilized
                during the American Revolution as well as the war of 1812.
              </p>
              <p>
                The area is rich with history, including serving as a terminus
                for slaves travelling from the United States into Canada using
                the underground railroad.
              </p>
              <p>
                The Peace Bridge is located in Fort Erie, crossing to Buffalo
                NY, allowing for easy travel between the United States and
                Canada.
              </p>
              <h3>What is the Weather Like in Fort Erie?</h3>
              <p>
                Winter temperatures tend to be below freezing during the winter
                season, and can drop to -18 Celsius (-1 F). The region can be
                quite snowy, so make sure you dress in layers, wear hats, mitts,
                and have good winter boots if you plan to be outside. Be
                prepared for a fun Canadian winter!
              </p>
              <p>
                Spring and fall are warmer with temperatures ranging from just
                above freezing to 15 degrees Celsius (59 F) with the occasional
                warmer day. These are Fort Erie’s rainy seasons, so umbrellas or
                rain gear is recommended.
              </p>
              <p>
                Summer in Fort Erie and Southern Ontario are hot, sunny, and
                humid. Temperatures average 27 degrees Celsius (81 F), but can
                soar to 42 degrees Celsius with the humidex (108 F). Sunscreen
                and light clothing are recommended. Be aware of the signs of
                heatstroke, and make sure that you stay hydrated.
              </p>
              <h3>Things to do in Fort Erie</h3>
              <p>
                Old Fort Erie- Visit the onsite museum to learn the history of
                the fort and surrounding area. During the summer months, you can
                witness the reenactments of battles from the War of 1812.
              </p>
              <p>
                Bay Beach (also known as Crystal Beach)- Popular with visitors
                and locals alike, experience the long sandy beaches along Lake
                Erie’s shoreline with friends and family. Perfect for swimming,
                reading a book on the beach, grabbing a drink in a local bar, or
                perusing one of the many wonderful boutiques in the area.
              </p>
              <p>
                Railway Museum- Open during the summer months, train lovers
                flock to this steam train museum to sit in the conductor seat of
                a locomotive and explore what it would have been like to be a
                crew member on one of these old time trains.
              </p>
              <p>
                Explore the Area- Fort Erie has many beautiful parks, waterways,
                and nature areas to explore. If you’re a foodie, there are
                plenty of bars, restaurants, and cafes to indulge your taste
                buds.
              </p>
              <p>
                Niagara falls is a quick drive from Fort Erie. You can take in
                one of the wonders of the world (Niagara Falls) and choose from
                experiencing any of the many exciting adventures the city has to
                offer, or visit Safari Niagara with over 150-acres of
                conservation area and more than 1000 animals to see all in an
                afternoon.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187141.48056112576!2d-79.15433070551377!3d42.87103666280323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33e24e7337d03%3A0x885d5008ef9ad9d1!2sFort%20Erie%2C%20ON!5e0!3m2!1sen!2sca!4v1651068205022!5m2!1sen!2sca"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutErie;
