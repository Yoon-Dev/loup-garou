import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../style/style'
import Grid from '@material-ui/core/Grid';




const Footer = props => {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        box: {
            display: 'flex',
            justifyContent: 'space-around',
        },
        boxtext: {
            display: 'flex',
            justifyContent: 'center',
        },
        text: {
            textAlign: 'center',
        },
        footer: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            minHeight: '8vh',
            padding: '1em'
        }, click: {
            color: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            background: "url('https://media.giphy.com/media/l4FGjPobk7z4iFXPy/source.gif') 0px 0px no-repeat",
            backgroundSize: "cover",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textShadow: "0.04em -0.06em #dbdbdb",
            overflow: "hidden",
        },
        container: {
            alignItems: 'flex-end'
        }
        }));

    const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color={props.color} className={classes.footer}>
        <Toolbar className={classes.box}>
            <Grid container spacing={3} className={classes.container}>
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