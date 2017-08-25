var React = require('react');
var Button = require('./button');
var Input = require('./input');
var Options = require('./options');

var App = React.createClass({

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
