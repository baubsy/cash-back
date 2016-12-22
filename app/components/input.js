var React = require('react');
var Button = require('./button');
var Status = require('./status');
//include a submit button. should compare apps current and target
//var debugCash = 0;

var total = 50; //make random
var paid = 100; //make random higher than total
var target = paid - total;

var Input = React.createClass({

  getInitialState: function () {
    return {current : 0,
            total : total,
            paid : paid,
            target : target };
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
    console.log(this.state);
  },
  //TODO change this.props.onClick to a function that compares values for submit button
  //TODO add status props
  render: function () {
    return (
      <div>
      <Status />
      <button onClick = {this.props.onClick}>Submit</button>
      <div>
      <Button cash = {20} label = {"20"} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {10} label = {"10"} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {5} label = {"5"} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {1} label = {"1"} onClick = {this.handleClick} current = {this.state.current}/>
      </div>
      <div>
      <Button cash = {.25} label = {".25"} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {.10} label = {".10"} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {.05} label = {".05"} onClick = {this.handleClick} current = {this.state.current}/>
      <Button cash = {.01} label = {".01"} onClick = {this.handleClick} current = {this.state.current}/>
      </div>
      </div>
    );
  }
});

module.exports = Input;
