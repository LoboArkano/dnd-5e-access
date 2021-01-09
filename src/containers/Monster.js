import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMonster } from '../actions/index';

const Monster = props => {
  const {
    item, loading, match,
    fetchMonster,
  } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonster(match.params.name));
  }, []);

  return (
    <div>
      {
        loading
          ? <h4>Loading</h4>
          : (
            <>
              <h2>{item.name}</h2>
              <h5>{`${item.size} ${item.type} ${item.alignment}`}</h5>
              <p>{`Armor Class: ${item.armor_class}`}</p>
              <p>{`Hit Points: ${item.hit_points} (${item.hit_dice})`}</p>
              <p>{`Speed: ${item.name}`}</p>
            </>
          )
      }
    </div>
  );
};

Monster.propTypes = {
  item: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.shape().isRequired,
  fetchMonster: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { monsters } = state;
  const { item, loading } = monsters;

  return { item, loading };
};

const mapDispatchToProps = { fetchMonster };

export default connect(mapStateToProps, mapDispatchToProps)(Monster);
