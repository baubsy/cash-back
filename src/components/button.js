import React from 'react';

//example <button onClick={this.props.onClick}>
class Button extends React.Component{
  //state keeps track of button presses for denomination counter option
  state = {counter: 0}
  //resets state between rounds, reads button hidden status to detect new round
  componentDidUpdate(){
    if(this.props.hidden === true && this.state.counter !== 0){
      this.setState({counter: 0})
    }
  }
  handleButton= () => {
    console.log('button click debug');
    this.setState({counter: this.state.counter + 1})
    //console.log(this.state);
    //TODO line 9 to 15 not nesscary outside of debug? see input's handleClick function
    var fixedCash = this.props.cash + this.props.current;

    fixedCash.toFixed(2);

    this.setState({
      value: fixedCash
    });
    //console.log(this.state.value);

    this.props.onClick(this.props.cash);
  }
  render() {
    //console.log(this.state);
    if(this.props.counter === true){
      return (
        <button
          className = "btn-lg btn-primary"
          hidden={this.props.hidden}
          onClick={this.handleButton}
        >
          {this.props.label}
          <div><sub>{this.state.counter}</sub></div>
        </button>)
    };
    return (
      <button
        className = "btn-lg btn-primary"
        hidden={this.props.hidden}
        onClick={this.handleButton}
      >
        {this.props.label}
      </button>)
  }
};

export default Button;
