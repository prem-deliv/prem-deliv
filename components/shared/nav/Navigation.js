import Link from "next/link";
import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import logo from "../../../public/logo.png";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.nav}>
      <Navbar expanded={expanded} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image
                className="img-fluid logo"
                src={logo}
                alt="Best Food Delivery Fort Erie"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onClick={() => setExpanded(false)}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/service-fees">Service Fees</Link>
              <Link href="/about">About</Link>
              <Link href="/apply">Careers</Link>
              <Link href="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
