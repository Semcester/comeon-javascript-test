import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import NotFoundAnimation from "./animation/124616-error-404.json";

const ErrorPage = () => {
  return (
    <div className="main container">
      <h1>Page Not Found</h1>
      <Lottie
        animationData={NotFoundAnimation}
        loop={true}
        style={{ height: "20rem" }}
      />
      <Link to="/casino">
        <div className="ui icon input">
          <input type="submit" value="Back To Home Page" />
          <i className="right chevron icon"></i>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
