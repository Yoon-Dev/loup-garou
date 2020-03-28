import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../components/Button';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../style/style'
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




const ButtonAppBar = props => {

  const { user } = useSession();
  console.log(`Header ${user}`)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          justifyContent: ''
      },
      logo: {
          maxHeight: '8vh',
          padding: '1em'
      },
      item: {
        display: 'flex',
        justifyContent: "center"
      },
      container: {
        alignItems: 'center'
      },
      toggledmenu: {
        backgroundColor: 'black'
      }
      }));

  const classes = useStyles();

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth)
  })

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color={props.color} >
        <Toolbar className={classes.box}>
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={8}>
              <Link to={props.logoredirect} color="inherit">
                <img src="./img/logo.png" className={classes.logo}/>
              </Link>
            </Grid>
            { windowSize > 768 ? 
            <Fragment>
              <Grid item xs={2} className={classes.item}>
                <Link to="/create" onClick={() => createGame(user)}>
                  <Button color="primary">
                    Nouvelle partie
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={2} className={classes.item}>
                <Link to="/join">
                  <Button color="secondary">
                    Rejoindre une partie
                  </Button>
                </Link>
              </Grid>
            </Fragment>  
          : 
          <Fragment> 
            <Grid item xs={4} className={classes.item}>
              <IconButton  className={classes.menuButton} color="inherit" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <div>
                  <MenuItem onClick={handleClose} className={classes.item}>
                    <Link to="/create" onClick={() => createGame(user)}>
                      <Button color="primary">
                        Nouvelle partie
                      </Button> 
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.item}>
                    <Link to="/join">
                      <Button color="secondary">
                        Rejoindre une partie
                      </Button>
                    </Link>
                  </MenuItem>
                </div>      
              </Menu>
            </Grid>
            
          </Fragment> 
          }
          </Grid>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default ButtonAppBar;