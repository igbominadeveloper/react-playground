import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/stylesheets/Person.css';

const propTypes = {
  person: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired,
};

function Person({ person, clicked }) {
  return (
    <div key={person.id} onClick={clicked} className="person-item">
      <p>{person.name}</p>
      <p>{person.email}</p>
      <p>{person.username}</p>
    </div>
  );
}

Person.propTypes = propTypes;

export default Person;
