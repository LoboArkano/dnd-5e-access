import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMonster } from '../actions/index';

const Monster = props => {
  const {
    item, loading, match,
  } = props;
  let keys = [];
  const dispatch = useDispatch();

  useEffect(() => {
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

  return (
    <div>
      {
        loading || item.speed === undefined
          ? (
            <h4>
              Loading
            </h4>
          )
          : (
            <>
              <h2>{item.name}</h2>
              <h5>{`${item.size} ${item.type} ${item.alignment}`}</h5>
              <p>{`Armor Class: ${item.armor_class}`}</p>
              <p>{`Hit Points: ${item.hit_points} (${item.hit_dice})`}</p>
              <p>
                {getKeys(item.speed)}
                {`Speed: ${keys.map((s, index) => ` ${keys[index]}: ${item.speed[s]}ft`)}`}
              </p>
              <p>{`Strength: ${item.strength} (${modifier(item.strength)})`}</p>
              <p>{`Dexterity: ${item.dexterity} (${modifier(item.dexterity)})`}</p>
              <p>{`Constitution: ${item.constitution} (${modifier(item.constitution)})`}</p>
              <p>{`Intelligence: ${item.intelligence} (${modifier(item.intelligence)})`}</p>
              <p>{`Wisdom: ${item.wisdom} (${modifier(item.wisdom)})`}</p>
              <p>{`Charisma: ${item.charisma} (${modifier(item.charisma)})`}</p>
              <p>{`Saving Throws: STR ${item.strength_save ? `+${item.strength_save}` : modifier(item.strength)}, DEX ${item.dexterity_save ? `+${item.dexterity_save}` : modifier(item.dexterity)}, CON ${item.constitution_save ? `+${item.constitution_save}` : modifier(item.constitution)}, INT ${item.intelligence_save ? `+${item.intelligence_save}` : modifier(item.intelligence)}, WIS ${item.wisdom_save ? `+${item.wisdom_save}` : modifier(item.wisdom)}, CHA ${item.charisma_save ? `+${item.charisma_save}` : modifier(item.charisma)}`}</p>
              <p>
                {getKeys(item.skills)}
                {`Skills: ${keys.map((s, index) => ` ${keys[index]}: +${item.skills[s]}`)}`}
              </p>
              {item.damage_vulnerabilities
                ? <p>{`Damage Vulnerabilities: ${item.damage_vulnerabilities}`}</p>
                : <></>}
              {item.damage_resistances
                ? <p>{`Damage Resistances: ${item.damage_resistances}`}</p>
                : <></>}
              {item.damage_immunities
                ? <p>{`Damage Immunities: ${item.damage_immunities}`}</p>
                : <></>}
              {item.condition_immunities
                ? <p>{`Condition Immunities: ${item.condition_immunities}`}</p>
                : <></>}
              <p>{`Senses: ${item.senses}`}</p>
              <p>{`Languages: ${item.languages}`}</p>
              <p>{`Challenge: ${item.challenge_rating}`}</p>
              <h3>Special Abilities</h3>
              {item.special_abilities.map(sp => (
                <p key={sp.name}>
                  <span>{`${sp.name}: `}</span>
                  {`${sp.desc}`}
                </p>
              ))}
              <h3>Actions</h3>
              {item.actions.map(act => (
                <p key={act.name}>
                  <span>{`${act.name}: `}</span>
                  {`${act.desc}`}
                </p>
              ))}
              <h3>Legendary Actions</h3>
              {item.legendary_actions.map(act => (
                <p key={act.name}>
                  <span>{`${act.name}: `}</span>
                  {`${act.desc}`}
                </p>
              ))}
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
};

const mapStateToProps = state => {
  const { monsters } = state;
  const { item, loading } = monsters;

  return { item, loading };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Monster);
