import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../style/style';


const Loader = () => {

    const sizeprovider = width => {
        if(width > 768){
            return true;
        }else{
            return false;
        }
    }
    
    const [imgsize, setImgSize] = useState(sizeprovider(window.innerWidth));
    window.addEventListener('resize', () => {
      setImgSize(sizeprovider)
    })

    const classes = useStyles();
  return ( 
  
  
  
    <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} className={classes.item}>
            <div className={classes.center}>
                <img src="./img/loader.svg" alt="" className={imgsize ? classes.loaderlap : classes.loader}/>
                <Typography>
                    Chargement du master game en cours...
                </Typography>
            </div>
        </Grid>
                
    </Grid>
        
      
    
    
    
    
    
    );
}

export default Loader;
