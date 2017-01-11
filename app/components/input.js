var React = require('react');
var Button = require('./button');
var Status = require('./status');
//include a submit button. should compare apps current and target
//var debugCash = 0;
//TODO fix rounding and decimal issues
var total = 50; //make random
var paid = 100; //make random higher than total
var target = paid - total;


var Input = React.createClass({

  getInitialState: function () {
    return {current : 0,
            total : total,
            paid : paid,
            target : target};
  },
  randCash(){
      var debugTest = (Math.random() * (400 - 1) + 1).toFixed(2);

      console.log("Debug Rand Cash: " + debugTest)
  },
  roundStart(){
    var startTotal = this.randCash;
    var startPaid = startTotal + 20;//todo Make this not just 20, any dollar amount above paid
    var startTarget = startPaid - startTotal;

    this.setState.total = startTotal;
    this.setState.paid = startPaid;//TODO dollar amound above randCash, preferably in amounts that make sense
    this.setState.target = startTarget;
    this.forceUpdate(); //TODO DONT LEAVE THIS IN FIX IT RIGHT
    console.log("Debug round start Total: " + this.state.total + "Paid: " + this.state.total);
  },
  handleSubmit: function () {
    console.log("Debug target on submit: " + this.state.target);
    this.props.onClick(this.state.current, this.state.target);
  },
  handleClick: function (cash) {
    //logic for adding up button clicks
    console.log('debug button click input');
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
        <button onClick = {this.roundStart}>Debug Test</button>
        <Status total = {this.state.total} paid = {this.state.paid} current = {this.state.current} status = {this.props.status}/>
        <button onClick = {this.handleSubmit} >Submit</button>
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
