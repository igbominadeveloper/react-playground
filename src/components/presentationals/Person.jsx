import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  person: PropTypes.object.isRequired,
};

function Person({ person = {} }) {
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.email}</p>
      <p>{person.username}</p>
    </div>
  );
}

Person.propTypes = propTypes;

export default Person;
