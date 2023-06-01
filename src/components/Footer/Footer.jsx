import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/vendorfy-logo.jpeg";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Vendorfy</h5>
        <p>Get your vendors around</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Timings</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 9:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>10:00am - 10:00pm</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
