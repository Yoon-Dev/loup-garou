import React from 'react';
import { useGame } from '../services/Game';


const DeadPage = () => {
  const { game } = useGame();


  return (
  <div> 
    <p>
      La partie est finie... Les gagnants sont :
    </p>
    <ul>
      { game.users.map( (user) => {
        if (user.isAlive) {
          return (<li>{user.userName}</li>);
        }
        else {
          return false;
        }
      })
      }
    </ul>
  </div>
  );
};

export default DeadPage;
