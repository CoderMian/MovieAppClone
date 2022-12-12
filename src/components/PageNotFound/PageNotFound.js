import React from "react";
import pnf from "../../images/pnf.jpg";
const PageNotFound = () => {
  return (
    <div>
      <img
        src={pnf}
        alt="page not found"
        style={{ width: "100%", height: "520px" }}
      />
    </div>
  );
};

export default PageNotFound;
