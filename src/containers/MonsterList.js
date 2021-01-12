import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMonsters, changeFilter } from '../actions/index';
import MonstersFilter from '../components/MonstersFilter';
import '../assets/stylesheets/monsterList.css';

const MonsterList = props => {
  const { monsters, filter, changeFilter } = props;
  const { loading, list } = monsters;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list.length) { dispatch(fetchMonsters('?limit=1500')); }
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

  const getContent = list => list.map(monster => (
    <Link key={monster.slug} to={`/monster/${monster.slug}`} className="item-container">
      <div className="monster d-flex w-100">
        <div className="lg-col"><h4>{`${monster.name}`}</h4></div>
        <div className="md-col cap"><p>{`${monster.type}`}</p></div>
        <div className="sm-col"><p>{`${monster.challenge_rating}`}</p></div>
        <div className="xs-col"><p>{`${monster.size}`}</p></div>
        <div className="xs-col"><p>{`${monster.hit_points}`}</p></div>
      </div>
    </Link>
  ));

  return (
    <div className="main-container">
      {
        loading
          ? <h4>Loading</h4>
          : (
            <>
              <MonstersFilter changeFilter={handleFilterChange} />
              <div className="row d-flex w-100">
                <div className="lg-col">Name</div>
                <div className="md-col">Type</div>
                <div className="sm-col">Challenge Rating</div>
                <div className="xs-col">Size</div>
                <div className="xs-col">Hit Points</div>
              </div>
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
