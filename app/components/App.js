var React = require('react');
var Button = require('./button');
var Input = require('./input');
var Options = require('./options');

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
  compare: function (current, target) {
    //TODO either run a state that indicates a game mode and determines what to do in this function
    //or make a differnt function that gets called becdause of  agame mode state
    console.log('debug compare');
    console.log(current);
    console.log(target);

    if(current == target){
      //TODO render a correct answer message
      console.log("correct");
    }
    else if(current > target){
      //TODO render a missed answer message saying too much given, maybe in status
      console.log("too much");
    }
    else if(current < target){
      //TODO render missed message showing not enought given
      console.log("not enough");
    }
    //compare target and current on submit click
    //pass current and target?
    //have status wait and than update props triggering reset?
  },
  render: function () {
    //console.log(App.state.target);
    return (<div>
            <Options />
            <Input onClick = {this.compare}/>
            </div>); //have input keep track of the state?
  },

  componentDidMount: function() {
      console.log('test1');
      console.log(this.state);
  }
});

module.exports = App;
