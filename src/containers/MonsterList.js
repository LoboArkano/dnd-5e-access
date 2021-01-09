import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMonsters, changeFilter } from '../actions/index';
import MonstersFilter from '../components/MonstersFilter';

const MonsterList = props => {
  const { monsters, filter, changeFilter } = props;
  const { loading, list } = monsters;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonsters('?limit=1500'));
  }, []);

  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };

  const filteredMonsters = (list, filter) => {
    if (filter === 'All') {
      return list;
    }

    return list.filter(monster => monster.type === filter || monster.size === filter);
  };

  const getContent = list => list.map(monster => {
    const type = `Type: ${monster.type}`;
    const challengeRating = `Challenge Rating: ${monster.challenge_rating}`;
    const size = `Size: ${monster.size}`;
    const hitPoints = `Hit Points: ${monster.hit_points}`;

    return (
      <Link key={monster.slug} to={`/monster/${monster.slug}`}>
        <div>
          <h4>{`Name: ${monster.name}`}</h4>
          <p>{type}</p>
          <p>{challengeRating}</p>
          <p>{size}</p>
          <p>{hitPoints}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      {
        loading
          ? <h4>Loading</h4>
          : (
            <>
              <MonstersFilter changeFilter={handleFilterChange} />
              {getContent(filteredMonsters(list, filter))}
            </>
          )
      }
    </div>
  );
};

MonsterList.propTypes = {
  monsters: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { monsters, filter } = state;

  return { monsters, filter };
};

const mapDispatchToProps = { changeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList);
