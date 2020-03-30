import React from 'react';
import { useSession } from '../services/User';
import { useGame } from '../services/Game';


const DeadPage = () => {
  const { user } = useSession();
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
          return ;
        }
      })
      }
    </ul>
  </div>
  );
};

export default DeadPage;
