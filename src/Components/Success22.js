import React from "react";
import { useHistory } from "react-router";
import "./Success.css";

function Success() {
  const history = useHistory();
  return (
    <>
      <span>
        <button className="btn" onClick={() => history.push("/")}>
          Back To LogIn
        </button>
      </span>
      <span className="success__message">
        <h1>Login Success</h1>
      </span>
    </>
  );
}
export default Success;
