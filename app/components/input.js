var React = require('react');
var Button = require('./button');
//include a submit button. should compare apps current and target
//var debugCash = 0;

var Input = React.createClass({
  getInitialState: function () {
    return {current : 0 };
  },
  handleClick: function (cash) {
    //logic for adding up button clicks
    console.log('debug button click input');
    //console.log(cash);
    //console.log(e);
    //console.log(Button.props.cash);
    /*
    debugCash = debugCash + 1;
    console.log(debugCash);
    */

    this.setState({
      current: cash + this.state.current

    });


  },
  componentDidUpdate: function() {
    console.log('inputs state current is ' + this.state.current);
  },
  //TODO change this.props.onClick to a function that compares values for submit button
  render: function () {
    return (
      <div>
      <button onClick = {this.props.onClick}>Submit</button>
      <div>
      <Button cash = {20} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {10} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {5} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {1} onClick = {this.handleClick} current = {this.state.current}/>
      </div>
      <div>
      <Button cash = {.25} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {.10} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {.05} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {.01} onClick = {this.handleClick} current = {this.state.current}/>
      </div>
      </div>
    );
  }
});

module.exports = Input;
