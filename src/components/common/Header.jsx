import React from "react";
import { Alert } from "react-bootstrap";
import SimpleContext from "../context/SimpleContext";
import { useContext } from "react";

const Header = ({ appTitle }) => {
  const headerContext = useContext(SimpleContext);
  const works = headerContext;

  let badgeStyle = [];
  if (works.length >= 3) {
    badgeStyle.push("badge-success");
  } else if (works.length === 2) {
    badgeStyle.push("badge-warning");
  } else if (works.length <= 1) {
    badgeStyle.push("badge-danger");
  }

  return (
    <div>
      <Alert variant="info">
        <h2> {appTitle} </h2>
      </Alert>

      <Alert variant="light">
        تعداد کارهای روز مره من
        <span className={`badge badge-pill ${badgeStyle.join("")}`}>
          {headerContext.works.length}
        </span>
        میباشد
      </Alert>
    </div>
  );
};

export default Header;
