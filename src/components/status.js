import React from 'react';

//pass in target and current. use function on click to compare. give how far off or victory message
class Status extends React.Component{
  render() {
    return <p className = {this.props.style}>{this.props.status}</p>;
  }
};

export default Status;
