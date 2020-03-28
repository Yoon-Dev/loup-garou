import React from 'react';
import { useSession } from '../services/User';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const Start = () => {

  const { user } = useSession();

  console.log(`Start page ${user}`)
  const useStyles = makeStyles(theme => ({
    item: {
      display: 'flex',
      justifyContent: "center"
    },
    container: {
      alignItems: 'center'
    },
    center:{
        textAlign: 'center'
    },
    video: {
      marginTop: "15px",
      minWidth: "100vw",
      height: "50vh"
    }
    }));

  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.item}>
          <video width="320" height="240" autoPlay loop className={classes.video}>
            <source src="./video/trailer.mp4" type="video/mp4" />
          </video>
      </Grid>
    </Grid>



        
  );
}

export default Start;
