import * as PropTypes from "prop-types";
import React from "react";
import "./OrderCardStyles.css"


export function OrderCard(props) {
  const { description, _restaurant, status, total_amount } = props.order;
  return (
    <div className="col s4 m4">
      <div className="card  darken-1 header-color">
        <div className="card-content white-text">
          <span className="card-title">{_restaurant.name}</span>
          <p>{description}</p>
        </div>
        <div className="card-panel dark ">
          {[
            "placed",
            "cancelled",
            "processing",
            "in_route",
            "delivered",
            "received"
          ].map(stat => (
            <div
              style={{
                cursor: "pointer",
                color: status === stat ? "red" : "unset",
                fontWeight: status === stat ? 500 : "unset"
              }}
              className="chip"
              onClick={() => props.onStatusChange(stat)}
            >
              {stat}
            </div>
          ))}
          <div className="amount-text" style={{ fontWeight: 700 }}>Total amt: {total_amount}</div>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = { order: PropTypes.any };
