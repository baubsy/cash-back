import React from 'react';
import CheckBox from './checkBox';
//component for selecting options such as, hide amounts, do a set?, timed?
//pass state to app?
//TODO add options,
class Options extends React.Component{

  checkToggle =() => {
    console.log('testgg')
    //console.log(this.state.counter);
  };
  render() {
    //console.log(this.props.counter);
    return <CheckBox option = "Show Denomination Count" onToggle = {this.props.onToggle} value = {this.props.counter}/>;
  }
};

export default Options;
