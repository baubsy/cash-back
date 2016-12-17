var React = require('react');

var button = React.createClass({
  render: function () {
    return <button>{this.props.cash}</button>;
  }
});

module.exports = button;
