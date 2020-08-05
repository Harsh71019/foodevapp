import * as PropTypes from "prop-types";
import React from "react";
import "./MealCardStyles.css"

export function MealCard(props) {
  const {
    onItemAdd,
    meal: { description, name, price, total },
    onItemRemove
  } = props;
  return (
    <div className="col s12 m12">
      <div className="card  card-color">
        <div className="card-content white-text">
          <span className="card-title">
            {name} - ₹{price}
          </span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a className="waves-effect waves-light btn-small">
            <i onClick={onItemAdd} className="material-icons left">
              add
            </i>
            {total || 0}
            <i onClick={onItemRemove} className="material-icons right">
              remove
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.any,
  onItemAdd: PropTypes.func,
  onItemRemove: PropTypes.func
};
