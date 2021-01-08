import React from 'react';
import PropTypes from 'prop-types';

const types = [
  'All', 'humanoid', 'humanoid (any race)', 'swarm of tiny beasts', 'swarm of tiny constructs',
  'aberration',
];

const sizes = [
  'All', 'Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan',
];

const MonstersFilter = props => {
  const { changeFilter } = props;

  return (
    <div>
      <label htmlFor="type">
        Type:
        <select name="types" id="types" onChange={changeFilter}>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>
      <label htmlFor="size">
        Size:
        <select name="sizes" id="sizes" onChange={changeFilter}>
          {sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

MonstersFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default MonstersFilter;
