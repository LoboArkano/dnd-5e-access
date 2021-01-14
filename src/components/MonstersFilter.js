import React from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/monstersFilter.css';

const types = [
  'All', 'Aberration', 'Beast', 'Celestial', 'Construct', 'Dragon', 'Elemental',
  'Fey', 'Fiend', 'Giant', 'Humanoid', 'Humanoid (Any Race)', 'Humanoid (Shadow Fey)',
  'Humanoid (Shapechanger', 'Humanoids', 'Monstrosity', 'Ooze', 'Plant',
  'Swarm of Medium Undead', 'Swarm of Tiny Aberrations', 'Swarm of Tiny Beasts',
  'Swarm of Tiny Constructs', 'Swarm of Tiny Elementals', 'Swarm of Tiny Fey',
  'Swarm of Tiny Monstrosities', 'Swarm of Tiny Undead', 'Undead',
];

const sizes = [
  'All', 'Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan',
];

const MonstersFilter = props => {
  const { changeFilter } = props;

  return (
    <div className="filter-container d-flex w-100">
      <label className="label d-flex" htmlFor="type">
        Type:
        <select className="filter cap" name="types" id="types" onChange={changeFilter}>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="label d-flex" htmlFor="size">
        Size:
        <select className="filter cap" name="sizes" id="sizes" onChange={changeFilter}>
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
