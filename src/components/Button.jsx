import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Button.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
};

const Button = props => {
  return <button className={props.class}>{props.name}</button>;
};

Button.propTypes = propTypes;

export default Button;
