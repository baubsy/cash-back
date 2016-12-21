var React = require('react');


//example <button onClick={this.props.onClick}>
var button = React.createClass({
  //var stateCash = this.props.cash , look up passing state up
  getInitalState: function(){
    return {value: this.props.cash}
  },
  render: function () {
    console.log(this.state);
    return <button onClick={this.props.onClick}>{'$' + this.props.cash}</button>;
  }
});

module.exports = button;
