var React = require('react');
var Button = require('./button');
var Input = require('./input');

var App = React.createClass({
  getInitalState: function () {
    return {target: "8.55",
            current: "0.0"}; //TODO make target randomized
  },
  render: function () {
    //console.log(App.state.target);
    return <Input/>;
  },

  componentDidUpdate: function(prevProps, prevState) {
      console.log(prevState);
  }
});

module.exports = App;
