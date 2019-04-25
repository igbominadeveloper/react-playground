import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Punchbag.css';

const Punchbag = props => {
  return (
    <img src={props.values.url} alt="punchbag" className={props.values.class} />
  );
};

Punchbag.propTypes = {
  values: PropTypes.object.isRequired,
};

export default Punchbag;
