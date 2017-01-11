var React = require('react');

//pass in target and current. use function on click to compare. give how far off or victory message
var Status = React.createClass({
  render: function () {
    return <p>{this.props.status}</p>;
  }
});

module.exports = Status;
