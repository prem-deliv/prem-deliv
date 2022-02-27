import { Container, Grid, GridItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../services/Services.module.scss";

interface Props {
  title: string;
  headingOne: string;
  iconOne: string;
  headingTwo: string;
  iconTwo: string;
  headingThree: string;
  iconThree: string;
}

const Services: React.FC<Props> = ({
  title,
  headingOne,
  iconOne,
  headingTwo,
  iconTwo,
  headingThree,
  iconThree,
}) => {
  return (
    <>
      <section className={styles.services}>
        <Container maxW="container.lg">
          <h2 className={styles.services__title}>{title}</h2>
          <hr />
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%">
              <Image
                src={iconOne}
                width="400px"
                height="400px"
                alt={headingOne}
              />
              <h3>{headingOne}</h3>
            </GridItem>
            <GridItem w="100%">
              <Image
                src={iconTwo}
                width="400px"
                height="400px"
                alt={headingTwo}
              />
              <h3>{headingTwo}</h3>
            </GridItem>
            <GridItem w="100%">
              <Image
                src={iconThree}
                width="400px"
                height="400px"
                alt={headingThree}
              />
              <h3>{headingThree}</h3>
            </GridItem>
          </Grid>
          <Link href="/services">
            <Button>View Services</Button>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Services;
