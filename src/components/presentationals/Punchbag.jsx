import React from 'react';
import PropTypes from 'prop-types';

import image1 from '../../assets/images/green-punch-bag.png';
import image2 from '../../assets/images/red-punch-bag.png';
import '../../assets/stylesheets/Punchbag.css';

const Punchbag = props => {
  const { changeImage } = props.values;

  return <img src={changeImage ? image2 : image1} alt="punchbag" />;
};

Punchbag.propTypes = {
  values: PropTypes.object.isRequired,
};

export default Punchbag;
