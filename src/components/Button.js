import React from 'react';
import Buttonn from '@material-ui/core/Button';
import { MuiThemeProvider, makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from '../style/style';


const Button = (props) => {


const useStyles = makeStyles(() => createStyles({
    m:{
        margin: '15px'
    }
  }));
const classes = useStyles();

  const { onClick, children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Buttonn className={classes.m} variant="contained" color={props.color} onClick={onClick}>{ children }</Buttonn>  
    </MuiThemeProvider>

  );
}


// class ButtonClass extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <button onClick={this.props.onClick}> { this.props.children }</button>
//     )
//   }
// }

export default Button;
