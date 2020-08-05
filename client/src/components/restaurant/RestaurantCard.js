import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./RestaurantCardStyles.css"

export function RestaurantCard(props) {
  const { description, name, _id } = props.rest;
  return (
    <div className="col s4 m4">
      <div className="card color-card">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action ">
          <Link to={`/restaurants/${_id}`}> <span className="card-text">Order Now</span> </Link>
        </div>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = { rest: PropTypes.any };
