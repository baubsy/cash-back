import React from 'react';

class CheckBox extends React.Component {

  render(){
    var styles = {marginRight: '30px'}
    return (
      <div className = "text-right" style = {styles}>
        <input className = "form-check"
        type="checkbox"
        onClick={this.props.onToggle}
        defaultChecked = {this.props.value}
        />
        <label>{this.props.option}</label>
      </div>)
  }
}

export default CheckBox;
