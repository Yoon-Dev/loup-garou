import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import { useMasterGame, addPlayer } from '../services/MasterGame';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const AddPlayerForm = () => {


  const [value, setValue] = useState('');
  const { game } = useMasterGame();
    console.log("master game id", game.id);
    console.log("master game set ", game.players);
    console.log("master game", game);

  const handleSubmit = e => {
    e.preventDefault();
    value && addPlayer(value, game);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ajouter le nom d'un joueur..."
        onChange={e => setValue(e.target.value)}
      />
      <button>+</button>
    </form>
  );
};

const CreatePage = (props) => {
  const useStyles = makeStyles(theme => ({
    item: {
      display: 'flex',
      justifyContent: "center"
    },
    container: {
      alignItems: 'center'
    }
    }));

  const classes = useStyles();
  const { game } = useMasterGame();
  const players = game.players || [];

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <h1>Vos amis peuvent se connecter avec le code {game.code}</h1>
      </Grid>  
      <Grid item xs={12} className={classes.item}>
        {players.map((player, index) => (
          <div key={index}>
            {player.name}
          </div>
        ))}
      </Grid>
      <Grid item xs={12} className={classes.item}>
        <Link to="/night">
            <Button color="primary">Démarrer la partie</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default CreatePage;
