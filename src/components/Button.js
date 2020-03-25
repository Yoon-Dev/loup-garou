import React from 'react';


// const ButtonFct = (props) => {
//   const { onClick, children } = props;
//   return (<button onClick={onClick}> { children }</button>);
// }

class Button extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <button onClick={this.props.onClick}> { this.props.children }</button>
    )
  }
}

export default Button;
