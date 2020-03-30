import React from 'react';
import { useGame } from '../services/Game';


const ResultsPage = () => {
  const { game } = useGame();

  if (game.phase !== "vote") {
    return <div>Oops... La phase est {game.phase}</div>;
  }

  let isFinished = true;
  game.users.forEach( 
    (user) => {
      if (user.vote === "" && user.isAlive) {
        isFinished = false;
      }
    }
  )

  if (!isFinished) {
    return <div>En attente de tous les joueurs</div>;
  }

  // TODO add results 
  return (
  <div> 
    C'est [...] qui est mort !
  </div>
  );
};

export default ResultsPage;
