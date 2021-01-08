import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import fetchMonsters from '../actions/index';

const MonsterList = props => {
  const { monsters } = props;
  const { loading, list } = monsters;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonsters('?limit=1500'));
  }, []);

  return (
    <div>
      {
        loading
          ? <h4>Loading</h4>
          : list.map(monster => {
            const name = `Name: ${monster.name}`;
            const type = `Type: ${monster.type}`;
            const challengeRating = `Challenge Rating: ${monster.challenge_rating}`;
            const size = `Size: ${monster.size}`;
            const hitPoints = `Hit Points: ${monster.hit_points}`;

            return (
              <div key={monster.slug}>
                <h4>{name}</h4>
                <p>{type}</p>
                <p>{challengeRating}</p>
                <p>{size}</p>
                <p>{hitPoints}</p>
              </div>
            );
          })
      }
    </div>
  );
};

MonsterList.propTypes = {
  monsters: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  const { monsters } = state;

  return { monsters };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList);
