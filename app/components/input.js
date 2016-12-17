var React = require('react');
var Button = require('./button');

var Input = React.createClass({
  render: function () {
    return (
      <div>
      <div>
      <Button cash = "$20" />
      <Button cash = "$10" />
      <Button cash = "$5" />
      <Button cash = "$1" />
      </div>
      <div>
      <Button cash = "$.25" />
      <Button cash = "$.10" />
      <Button cash = "$.05" />
      <Button cash = "$.01" />
      </div>
      </div>
    );
  }
});

module.exports = Input;
