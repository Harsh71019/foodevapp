import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper background">
        <div className="row ">
          <div className="col s12 center-align ">
            <h4>
              Order food from{" "}
              <span style={{ fontFamily: "monospace" }}>FoodShala🍟🌭🍿</span>
            </h4>
             <h5>
             Get it in 20 minutes or get your money back!!
            </h5>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable black accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                 className="btn btn-large waves-effect waves-light hoverable black accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
