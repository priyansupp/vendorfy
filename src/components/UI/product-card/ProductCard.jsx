import React from "react";

import "../../../styles/product-card.css";

// import productImg from "../../../assets/images/product_2.1.jpg";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image,} = props.item;

  const viewOnMap = () => {
    
  };

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={image} alt="Pizza" />
        <h5>
          <Link to={`/vendors/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <Link to="/map">
        <button className="addTOCART__btn" onClick={viewOnMap}>
          View on Map
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
