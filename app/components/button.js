var React = require('react');


//example <button onClick={this.props.onClick}>
var button = React.createClass({
  render: function () {
    return <button onClick={this.props.onClick}>{'$' + this.props.cash}</button>;
  }
});

module.exports = button;
