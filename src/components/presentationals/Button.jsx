import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/stylesheets/Button.css';

const Button = ({ className, name, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.propTypes = propTypes;

export default Button;
