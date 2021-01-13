import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMonster } from '../actions/index';
import '../assets/stylesheets/monster.css';
import loadingImg from '../assets/images/loading.png';
import Error from '../components/Error';

const Monster = props => {
  const {
    item, loading, match, error,
  } = props;
  let keys = [];
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchMonster(match.params.name));
  }, [dispatch]);

  const getKeys = obj => {
    keys = Object.keys(obj);
  };

  const modifier = score => {
    let mod = '+0';

    if (score <= 1) mod = '-5';
    if (score >= 2 && score <= 3) mod = '-4';
    if (score >= 4 && score <= 5) mod = '-3';
    if (score >= 6 && score <= 7) mod = '-2';
    if (score >= 8 && score <= 9) mod = '-1';
    if (score >= 12 && score <= 13) mod = '+1';
    if (score >= 14 && score <= 15) mod = '+2';
    if (score >= 16 && score <= 17) mod = '+3';
    if (score >= 18 && score <= 19) mod = '+4';
    if (score >= 20 && score <= 21) mod = '+5';
    if (score >= 22 && score <= 23) mod = '+6';
    if (score >= 24 && score <= 25) mod = '+7';
    if (score >= 26 && score <= 27) mod = '+8';
    if (score >= 28 && score <= 29) mod = '+9';
    if (score >= 30) mod = '+10';
    return mod;
  };

  if (error.length) {
    return (
      <div className="monster-container">
        <Error />
      </div>
    );
  }

  return (
    <div className="monster-container">
      {
        loading || item.speed === undefined
          ? (
            <div className="loading d-flex w-100">
              <img className="loading-img" src={loadingImg} alt="" />
              <h4 className="text">Loading</h4>
            </div>
          )
          : (
            <article>
              <div className="main-info d-flex w-100">
                <div className="lg-item">
                  <h2 className="name">{item.name}</h2>
                  <h5 className="specs cap">{`${item.size} ${item.type}, ${item.alignment}`}</h5>
                  <p>
                    <span className="property">Armor Class: </span>
                    {`${item.armor_class}`}
                  </p>
                  <p>
                    <span className="property">Hit Points: </span>
                    {`${item.hit_points} (${item.hit_dice})`}
                  </p>
                  <p>
                    {getKeys(item.speed)}
                    <span className="property">Speed: </span>
                    {keys.map((s, index) => (
                      <>
                        <span className="cap">{`${keys[index]}: ${item.speed[s]}`}</span>
                        <span className="lower-case">ft. </span>
                      </>
                    ))}
                  </p>
                </div>
                <div className="sm-item d-flex">
                  <p className="stat d-flex">
                    <span className="prop">Strength: </span>
                    {`${item.strength} (${modifier(item.strength)})`}
                  </p>
                  <p className="stat d-flex">
                    <span className="prop">Dexterity: </span>
                    {`${item.dexterity} (${modifier(item.dexterity)})`}
                  </p>
                  <p className="stat d-flex">
                    <span className="prop">Constitution: </span>
                    {`${item.constitution} (${modifier(item.constitution)})`}
                  </p>
                  <p className="stat d-flex">
                    <span className="prop">Intelligence: </span>
                    {`${item.intelligence} (${modifier(item.intelligence)})`}
                  </p>
                  <p className="stat d-flex">
                    <span className="prop">Wisdom: </span>
                    {`${item.wisdom} (${modifier(item.wisdom)})`}
                  </p>
                  <p className="stat d-flex">
                    <span className="prop">Charisma: </span>
                    {`${item.charisma} (${modifier(item.charisma)})`}
                  </p>
                </div>
              </div>
              <div className="sec-info">
                <p>
                  <span className="sec-property">Saving Throws: </span>
                  {`STR ${item.strength_save ? `+${item.strength_save}` : modifier(item.strength)}, DEX ${item.dexterity_save ? `+${item.dexterity_save}` : modifier(item.dexterity)}, CON ${item.constitution_save ? `+${item.constitution_save}` : modifier(item.constitution)}, INT ${item.intelligence_save ? `+${item.intelligence_save}` : modifier(item.intelligence)}, WIS ${item.wisdom_save ? `+${item.wisdom_save}` : modifier(item.wisdom)}, CHA ${item.charisma_save ? `+${item.charisma_save}` : modifier(item.charisma)}`}
                </p>
                <p className="cap">
                  {getKeys(item.skills)}
                  <span className="sec-property">Skills: </span>
                  {`${keys.map((s, index) => ` ${keys[index]}: +${item.skills[s]}`)}`}
                </p>
                {item.damage_vulnerabilities
                  ? (
                    <p className="cap">
                      <span className="sec-property">Damage Vulnerabilities: </span>
                      {`${item.damage_vulnerabilities}`}
                    </p>
                  )
                  : <></>}
                {item.damage_resistances
                  ? (
                    <p className="cap">
                      <span className="sec-property">Damage Resistances: </span>
                      {`${item.damage_resistances}`}
                    </p>
                  )
                  : <></>}
                {item.damage_immunities
                  ? (
                    <p className="cap">
                      <span className="sec-property">Damage Immunities: </span>
                      {`${item.damage_immunities}`}
                    </p>
                  )
                  : <></>}
                {item.condition_immunities
                  ? (
                    <p className="cap">
                      <span className="sec-property">Condition Immunities: </span>
                      {`${item.condition_immunities}`}
                    </p>
                  )
                  : <></>}
                <p className="cap">
                  <span className="sec-property">Senses: </span>
                  {`${item.senses}`}
                </p>
                <p className="cap">
                  <span className="sec-property">Languages: </span>
                  {`${item.languages}`}
                </p>
                <p>
                  <span className="sec-property">Challenge: </span>
                  {`${item.challenge_rating}`}
                </p>
              </div>
              <div className="section">
                <h3 className="section-name">Special Abilities</h3>
                {item.special_abilities
                  ? item.special_abilities.map(sp => (
                    <p className="section-info" key={sp.name}>
                      <span className="property-bold">{`${sp.name}: `}</span>
                      {`${sp.desc}`}
                    </p>
                  ))
                  : <></> }
              </div>
              <div className="section">
                <h3 className="section-name">Actions</h3>
                {item.actions
                  ? item.actions.map(act => (
                    <p className="section-info" key={act.name}>
                      <span className="property-bold">{`${act.name}: `}</span>
                      {`${act.desc}`}
                    </p>
                  ))
                  : <></> }
              </div>
              <div className="section">
                <h3 className="section-name">Legendary Actions</h3>
                {item.legendary_actions
                  ? item.legendary_actions.map(act => (
                    <p className="section-info" key={act.name}>
                      <span className="property-bold">{`${act.name}: `}</span>
                      {`${act.desc}`}
                    </p>
                  ))
                  : <></>}
              </div>
            </article>
          )
      }
    </div>
  );
};

Monster.propTypes = {
  item: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.shape().isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  const { monsters } = state;
  const { item, loading, error } = monsters;

  return { item, loading, error };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Monster);
