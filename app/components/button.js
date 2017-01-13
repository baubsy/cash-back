var React = require('react');

//example <button onClick={this.props.onClick}>
var button = React.createClass({
  //var stateCash = this.props.cash , look up passing state up
  //TODO state should not be based on just cash, need to pass total as a props
  getInitialState: function(){
    return {value: this.props.current}
  },
  handleButton: function () {
    console.log('button click debug');
    //console.log(this.state);

    this.setState({
      value: this.props.cash + this.props.current
    });
    console.log(this.state.value);

    this.props.onClick(this.props.cash);
  },
  render: function () {
    console.log(this.state);
    return <button className = "btn-primary" onClick={this.handleButton}>{'$' + this.props.label}</button>;
  }
});

module.exports = button;
