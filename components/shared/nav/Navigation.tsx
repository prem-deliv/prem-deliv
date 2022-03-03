import Link from "next/link";
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  Navbar,
} from "reactstrap";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Navbar expand="md">
        <NavbarBrand href="/">Premium Delivery</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink>
                <Link href="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/services">Services</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/service-fees">Service Fees</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/about">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/contact">Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
