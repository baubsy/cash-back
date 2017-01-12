var React = require('react');
var Button = require('./button');
var Input = require('./input');
var Options = require('./options');

//TODO after hitting submit prompt for another round, update target, total, and paid/set current back to zero

//maybe make a status.js
var App = React.createClass({
  /*
  getInitialState: function () {
    return {target: 8.55,
            total: 11.45,
            paid: 20.00,
            current: 0.0}; //TODO make target calculated from total and paid amount, make total and paid random
  },
  */
  /*
  getInitialState: function () {
    return {status: "begin"};
  },
  */
  /* Compare isnt done here atm
  compare: function (current, target, off) {
    //TODO is this even nesscary anymore? at the very least doesnt need var off
    //TODO either run a state that indicates a game mode and determines what to do in this function
    //or make a differnt function that gets called becdause of  agame mode state
    console.log('debug compare');
    console.log(current);
    console.log(target);

    if(current == target){
      //TODO render a correct answer message
      console.log("correct");
      //this.setState({status : "Correct"});//TODO Improve these messages, give detailed info feed back
    }
    else if(current > target){
      //TODO render a missed answer message saying too much given, maybe in status
      console.log("too much");
      //this.setState({status : "You gave $" + off + " too much!"});
    }
    else if(current < target){
      //TODO render missed message showing not enought given
      console.log("not enough");
      //this.setState({status : "You gave $" + off + " too little!"});
    }
    //compare target and current on submit click
    //pass current and target?
    //have status wait and than update props triggering reset?
  },*/
  render: function () {
    //console.log(App.state.target);
    //for examples sake input with function pass down<Input onClick = {this.compare} status = "Begin!"/>
    return (<div>
            <Options />
            <Input/>
            </div>); //have input keep track of the state?
  },

  componentDidMount: function() {
      //console.log('test1');
      console.log(this.state);
  }
});

module.exports = App;
