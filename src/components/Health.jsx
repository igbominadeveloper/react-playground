import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Health.css';

const propTypes = {
  life: PropTypes.number.isRequired,
};

const Health = props => {
  const style = {
    width: props.life + '%',
  };

  return (
    <div>
      <div className="health-bar">
        <div className="health" style={style} />
      </div>
    </div>
  );
};

Health.propTypes = propTypes;

export default Health;
