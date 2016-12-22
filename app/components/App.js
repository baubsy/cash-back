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
  compare: function () {
    console.log('debug compare');
    //compare target and current on submit click
    //pass current and target?
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
