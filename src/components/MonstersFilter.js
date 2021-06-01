import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import arrow from '../assets/images/down-arrow.png';

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

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width: '100%',
    margin: {
      bottom: 40,
      top: 30,
    },
    justifyContent: 'flex-end',
  },

  label: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: ['Merriweather', 'Arial', 'Helvetica', 'sans-serif'],
    fontSize: 20,
    color: 'rgb(22, 21, 21)',
    fontWeight: 700,

    '&:first-child': {
      marginRight: 15,
    },
  },

  filter: {
    width: 250,
    marginLeft: 10,
    padding: [6, 10, 9, 10],
    borderRadius: '4%',
    fontSize: 16,
    fontWeight: 400,
    color: 'rgb(160, 156, 156)',
    backgroundColor: 'rgb(247, 242, 242)',
    border: [1, 'solid', 'rgb(160, 156, 156)'],
    appearance: 'none',
    backgroundImage: `url(${arrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 15,
    backgroundPosition: '90%',
    textTransform: 'capitalize',
  },

  '@media (max-width: 697px)': {
    container: {
      flexWrap: 'wrap',
      marginBottom: 15,
    },

    label: {
      width: '100%',

      '&:first-child': {
        marginRight: 0,
      },
    },

    filter: {
      flexGrow: 1,
    },
  },
});

const MonstersFilter = props => {
  const { changeFilter } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="type">
        Type:
        <select className={classes.filter} name="types" id="types" onChange={changeFilter}>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className={classes.label} htmlFor="size">
        Size:
        <select className={classes.filter} name="sizes" id="sizes" onChange={changeFilter}>
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
