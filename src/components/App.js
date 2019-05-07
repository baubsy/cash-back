import React from 'react';

import Input from './input';
import Options from './options';

class App extends React.Component {
  state = {counter: false};

  optionsHandler = () => {
    console.log(this.state.counter);
    this.setState({counter: !this.state.counter})

  }
  render() {
    //git test
    //for examples sake input with function pass down<Input onClick = {this.compare} status = "Begin!"/>
    return (<div>
            <Options counter = {this.state.counter} onToggle = {this.optionsHandler}/>
            <Input counter = {this.state.counter}/>
            </div>) //have input keep track of the state?
  }

  componentDidMount() {
      //console.log('test1');
      console.log(this.state);
  }
};

export default App;
