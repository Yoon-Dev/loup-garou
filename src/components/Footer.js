import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../style/style'
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../style/style';




const Footer = props => {

const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color={props.color} className={classes.footer}>
        <Toolbar className={classes.box}>
            <Grid container spacing={3} className={classes.containerfoot}>
                <Grid item xs={4}>
                    <div className={classes.boxtext}>
                        <Typography className={classes.text}>
                            Les règles
                        </Typography>
                    </div>
                    <a href="http://lesloupsgarous.free.fr/htm/regles.html" target="_blank">
                        <Typography className={classes.click}>
                            click me !
                        </Typography>
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.boxtext}>
                        <Typography className={classes.text}>
                            Origines du jeux
                        </Typography>
                    </div>
                    <a href="https://fr.wikipedia.org/wiki/Les_Loups-garous_de_Thiercelieux#Histoire" target="_blank">
                        <Typography className={classes.click}>
                            click me !
                        </Typography>
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.boxtext}>
                        <Typography className={classes.text}>
                            Acheter le jeux
                        </Typography>
                    </div>
                    <a href="https://www.fnac.com/Loups-Garous-Le-Pacte-Asmodee/a8301030/w-4?Origin=SEA_GOOGLE_PLA_JOUET&esl-k=sem-google%7cng%7cc294697013443%7cm%7ckpla375327900180%7cp%7ct%7cdc%7ca58882734453%7cg1558059505&gclid=Cj0KCQjwyPbzBRDsARIsAFh15JZgDHCA9_HLaexZ6TfTXagLhtyzSduUppkAZWDvfkiz7fKQvIrlMY8aAhLoEALw_wcB&gclsrc=aw.ds" target="_blank">
                        <Typography className={classes.click}>
                            click me !
                        </Typography>
                    </a>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default Footer;