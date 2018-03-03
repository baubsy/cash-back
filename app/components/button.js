var React = require('react');

//example <button onClick={this.props.onClick}>
var button = React.createClass({
  handleButton: function () {
    console.log('button click debug');
    //console.log(this.state);
    //TODO line 9 to 15 not nesscary outside of debug? see input's handleClick function
    var fixedCash = this.props.cash + this.props.current;

    fixedCash.toFixed(2);

    this.setState({
      value: fixedCash
    });
    //console.log(this.state.value);

    this.props.onClick(this.props.cash);
  },
  render: function () {
    //console.log(this.state);
    return <button className = "btn-lg btn-primary" hidden={this.props.hidden} onClick={this.handleButton}>{this.props.label} </button>;
  }
});

module.exports = button;
