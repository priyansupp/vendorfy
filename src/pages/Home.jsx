import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/vendor.jpg";
import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy calling your vendors</h5>
                <h1 className="mb-4 hero__title">
                  <span>Get</span> your favorite Vendors
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/vendors">
                    Search for Vendors <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/map">
                    View on Map <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
