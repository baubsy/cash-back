var React = require('react');
var Button = require('./button');
//include a submit button. should compare apps current and target
var Input = React.createClass({
  getInitialState: function () {
    return {current : 0 };
  },
  handleClick: function (e) {
    //logic for adding up button clicks
    console.log('debug button click')
    this.setState({

      current: this.state.current + Button.props.cash
    }) //cant read cash this way TODO
    console.log(this.state.current)
  },
  render: function () {
    return (
      <div>
      <button onClick = {this.props.onClick}>Submit</button>
      <div>
      <Button cash = {20} onClick = {this.handleClick} />
      <Button cash = {10} onClick = {this.handleClick} />
      <Button cash = {5} onClick = {this.handleClick} />
      <Button cash = {1} onClick = {this.handleClick} />
      </div>
      <div>
      <Button cash = {.25} onClick = {this.handleClick} />
      <Button cash = {.10} onClick = {this.handleClick} />
      <Button cash = {.05} onClick = {this.handleClick} />
      <Button cash = {.01} onClick = {this.handleClick} />
      </div>
      </div>
    );
  }
});

module.exports = Input;
