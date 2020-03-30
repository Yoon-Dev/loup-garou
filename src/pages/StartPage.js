import React from 'react';
import { useSession } from '../services/User';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../style/style';



const Start = () => {

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
