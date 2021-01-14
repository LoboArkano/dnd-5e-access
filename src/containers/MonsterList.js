import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMonsters, changeFilter } from '../actions/index';
import MonstersFilter from '../components/MonstersFilter';
import Error from '../components/Error';
import '../assets/stylesheets/monsterList.css';
import loadingImg from '../assets/images/loading.png';

const MonsterList = props => {
  const { monsters, filter, changeFilter } = props;
  const { loading, list, error } = monsters;
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

    return list.filter(monster => (
      monster.type.toLowerCase() === filter.toLowerCase()
      || monster.size.toLowerCase() === filter.toLowerCase()
    ));
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

  const getMovileContent = list => list.map(monster => (
    <Link key={monster.slug} to={`/monster/${monster.slug}`} className="card item-container">
      <div><h4>{`Name: ${monster.name}`}</h4></div>
      <div className="cap"><p>{`Type: ${monster.type}`}</p></div>
      <div><p>{`Challange Rating: ${monster.challenge_rating}`}</p></div>
      <div><p>{`Size: ${monster.size}`}</p></div>
      <div><p>{`Hit Points: ${monster.hit_points}`}</p></div>
    </Link>
  ));

  if (error.length) {
    return (
      <div className="main-container">
        <Error />
      </div>
    );
  }

  return (
    <div className="main-container">
      {
        loading
          ? (
            <div className="loading d-flex w-100">
              <img className="loading-img" src={loadingImg} alt="" />
              <h4 className="text">Loading</h4>
            </div>
          )
          : (
            <div className="show">
              <MonstersFilter changeFilter={handleFilterChange} />
              <div className="row d-flex w-100">
                <div className="lg-col">Name</div>
                <div className="md-col">Type</div>
                <div className="sm-col">Challenge Rating</div>
                <div className="xs-col">Size</div>
                <div className="xs-col">Hit Points</div>
              </div>
              <div className="monster-list">
                {getContent(filteredMonsters(list, filter))}
              </div>
              <div className="monster-list-mov d-none">
                {getMovileContent(filteredMonsters(list, filter))}
              </div>
            </div>
          )
      }
    </div>
  );
};

MonsterList.propTypes = {
  monsters: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    error: PropTypes.string.isRequired,
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
