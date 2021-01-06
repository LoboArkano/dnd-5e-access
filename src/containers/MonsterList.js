import React, { useState, useEffect } from 'react';
import apiDnD from '../api/apiDnD';

const MonsterList = () => {
  const [state, setState] = useState({
    loading: false,
    monsters: {
      results: [],
    },
  });

  useEffect(async () => {
    setState({
      ...state,
      loading: true,
    });
    const response = await apiDnD();
    setState({
      ...state,
      loading: false,
      monsters: response,
    });
  }, []);

  return (
    <div>
      {
        state.loading
          ? <h4>Loaging</h4>
          : state.monsters.results.map(monster => {
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

export default MonsterList;
