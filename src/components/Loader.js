import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const Loader = () => {

    const sizeprovider = width => {
        if(width > 768){
            return "100%";
        }else{
            return "20%";
        }
    }
    const [imgsize, setImgSize] = useState(sizeprovider(window.innerWidth));
    window.addEventListener('resize', () => {
      setImgSize(sizeprovider)
    })

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
        loader:{
            maxWidth: imgsize
        }
        }));
    const classes = useStyles();
  return ( 
  
  
  
    <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} className={classes.item}>
            <div className={classes.center}>
                <img src="./img/loader.svg" alt="" className={classes.loader}/>
                <Typography>
                    Chargement du master game en cours...
                </Typography>
            </div>
        </Grid>
                
    </Grid>
        
      
    
    
    
    
    
    );
}

export default Loader;
