import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useUser} from '../services/User';
import Button from '../components/Button';
import firebase from '../services/Firebase';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



const CodePage = ({setGame}) => {
  const useStyles = makeStyles(theme => ({
    item: {
      display: 'flex',
      justifyContent: "center",
      
    },
    container: {
      marginTop: "25px",
      justifyContent: "center"
    },
    card: {
      boxShadow: "0px 0px 51px 3px rgba(0,0,0,0.25)"
    }
    }));
  const classes = useStyles();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const {user} = useUser();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('game')
      .where('code', '==', parseInt(code))
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const newData = {...doc.data()};
          newData.players = [...newData.players, {uid: user.uid, name}];
          firebase
            .firestore()
            .collection('game')
            .doc(doc.id)
            .update(newData);

          firebase
            .firestore()
            .collection('user')
            .doc(user.uid)
            .update({gameId: doc.id});

          history.push('/wait');
        });
      })
    .catch(console.log);
  };

  return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={8} md={12} className={classes.item}>
            <Card className={classes.card} color="secondary">
              <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} className={classes.item}>
                  <TextField
                    type="text"
                    name="code"
                    label="Ajouter le code de la partie"
                    variant="filled"
                    onChange={e => setCode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} className={classes.item}>
                  <TextField
                    type="text"
                    name="name"
                    label="Ajouter votre nom"
                    variant="filled"
                    onChange={e => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} className={classes.item}>
                  <Button color="primary">Démarrer</Button>
                </Grid>
              </Grid>         
            </Card>
          </Grid> 
        </Grid>
      </form>
      

      
    
    
  );
};

export default CodePage;
