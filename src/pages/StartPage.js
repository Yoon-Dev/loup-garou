import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';



const Start = () => {

  const { user } = useSession();

  console.log(`Start page ${user}`)
  const useStyles = makeStyles(theme => ({
    container: {
      minHeight: '100vh'
    
    },
    item: {
      display: 'flex',
      justifyContent: "center"
    }
    }));

const classes = useStyles();
  return (
      <div>
        <Link to="/create" onClick={() => createGame(user)}>
          <Button color="primary">
            Nouvelle partie
          </Button>
        </Link>
        <Link to="/join">
          <Button color="secondary">
            Rejoindre une partie
          </Button>
        </Link>
      </div>
        
  );
}

export default Start;
