import React from "react";
import PropTypes from "prop-types";

const FooterPresent = () => {
  return (
    <div className="mt-5 mb-5 pt-5 pb-5 pl-4 bg-light text-dark">
      Time now: {new Date().toLocaleDateString("en-NZ")} -
      {new Date().toLocaleTimeString("en-NZ")}
    </div>
  );
};

FooterPresent.propTypes = {};
export default FooterPresent;
