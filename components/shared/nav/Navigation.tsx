import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">Logo</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link href="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/services">Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/service-fees">Service Fees</Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
