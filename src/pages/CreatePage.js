import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import { useMasterGame } from '../services/MasterGame';
import { useStyles } from '../style/style';
import Grid from '@material-ui/core/Grid';


// const AddPlayerForm = () => {


//   const [value, setValue] = useState('');
//   const { game } = useMasterGame();

//   const handleSubmit = e => {
//     e.preventDefault();
//     value && addPlayer(value, game);
//     setValue('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Ajouter le nom d'un joueur..."
//         onChange={e => setValue(e.target.value)}
//       />
//       <button>+</button>
//     </form>
//   );
// };

const CreatePage = (props) => {

  const classes = useStyles();
  const { game } = useMasterGame();
  const players = game.players || [];

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <h1>Vos amis peuvent se connecter avec le code <b>{game.code}</b></h1>
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
