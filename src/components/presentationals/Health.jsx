import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/stylesheets/Health.css';

const propTypes = {
  life: PropTypes.number.isRequired,
};

const Health = ({ life }) => {
  const style = {
    width: life + '%',
    background: life <= 30 ? 'red' : life <= 60 ? 'yellow' : 'green',
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
