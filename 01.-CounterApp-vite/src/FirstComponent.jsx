import PropTypes from "prop-types";
import React from "react";

const FirstComponent = ({ title, subtitle, name }) => {
  return (
    <div>
      <h1>FirstComponent</h1>
      <h2 data-testid="test-title">{title}</h2>
      <p>{subtitle}</p>
      <p>{name}</p>
    </div>
  );
};

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
};

export default FirstComponent;
