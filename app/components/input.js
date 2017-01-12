var React = require('react');
var Button = require('./button');
var Status = require('./status');

//TODO fix rounding and decimal issues
//TODO remove the dependance on these variables and remove them
var total = 50; //make random
var paid = 100; //make random higher than total
var target = paid - total;


var Input = React.createClass({

  //TODO handle setting first state differntly.



  randCash(){
      var cash = (Math.random() * (400 - 1) + 1).toFixed(2);

      return cash;
  },
  getPaid(cash){
    var newPaid = cash;
    var rand = Math.random();
    //decide how much is over paid in logical dollar amounts
    //TODO iron out amounts
    //TODO watchout for rounding errors causing problems here
    if(rand > .84){
      //1
      newPaid = (parseFloat(cash) + 1).toFixed(0);

    }
    else if(rand > .68){
      //5
      newPaid = (parseFloat(cash) + 5).toFixed(0);
    }
    else if (rand > .54){
      //10
      newPaid = (parseFloat(cash) + 10).toFixed(0);
    }
    else if ( rand > .40){
      //20
      newPaid = (parseFloat(cash) + 20).toFixed(0);
    }
    else if ( rand > .30){
      //50
      newPaid = (parseFloat(cash) + 50).toFixed(0);
    }
    else{
      newPaid = (parseFloat(cash) + 100).toFixed(0);
    };
    return newPaid;
  },

  getInitialState: function () {
    return {current : 0,
            total : this.randCash(),
            paid : this.getPaid(),
            target : target,
            label: "Start!",
            status: "Begin"};
  },

  roundStart(){
    var startTotal = parseFloat(this.randCash()).toFixed(2); //Make use randCash
    var startPaid = this.getPaid(startTotal);//todo Make this not just 20, any dollar amount above paid
    var startTarget = parseFloat((parseFloat(startPaid) - parseFloat(startTotal)).toFixed(2)); //TODO remove parsefloats?
    var status = "The total was $" + startTotal + " and the customer paid $" + startPaid;

    this.setState({status: status});
    //console.log("Debug start vars " + startTotal + " " + startPaid + " " + startTarget);
    this.setState({total: startTotal});
    this.setState({paid: startPaid});//TODO dollar amound above randCash, preferably in amounts that make sense
    this.setState({target: startTarget});
    this.setState({current: 0});

    console.log("Debug round start Total: " + this.state.total + "Paid: " + this.state.total);
  },
  //comparison happens here, maybe shouldnt
  handleSubmit: function () {
    console.log("Debug target on submit: " + this.state.target);
    //TODO move this logic somewhere else, computes amount off by
    var off;
    //TODO change status name to avoid confusion with state status
    var status;
    if(this.state.current > this.state.target){
      off = this.state.current - this.state.target;
      status = "You paid $" + off.toFixed(2) + " too much!";
    }
    else if(this.state.current < this.state.target){
      off = this.state.target - this.state.current;
      status = "You paid $" + off.toFixed(2) + " too little!";
    }
    else{
      off = 0;
      status = "You got it right!";
    }
    //This function call can probably be culled, at the very least it doesnt need off
    //this.props.onClick(this.state.current, this.state.target, off.toFixed(2));

    this.setState({status: status});
    this.setState({label: "Try again?"});

  },
  handleClick: function (cash) {
    //logic for adding up button clicks
    console.log('debug button click input');
    /*
    debugCash = debugCash + 1;
    console.log(debugCash);
    */

    this.setState({
      current: cash + this.state.current

    });


  },
  componentDidUpdate: function() {
    //TODO remove these lines at the end. just for debug
    //console.log('inputs state current is ' + this.state.current);
    //console.log(this.state);
  },
  //TODO change this.props.onClick to a function that compares values for submit button
  //TODO add status props
  render: function () {
    return (
      <div>
        <button onClick = {this.roundStart}>{this.state.label}</button>
        <Status total = {this.state.total} paid = {this.state.paid} current = {this.state.current} status = {this.state.status}/>
        <button onClick = {this.handleSubmit} >Submit</button>
        <div>
          <Button cash = {20} label = {"20"} onClick = {this.handleClick} current = {this.state.current}/>
          <Button cash = {10} label = {"10"} onClick = {this.handleClick} current = {this.state.current}/>
          <Button cash = {5} label = {"5"} onClick = {this.handleClick} current = {this.state.current}/>
          <Button cash = {1} label = {"1"} onClick = {this.handleClick} current = {this.state.current}/>
        </div>
        <div>
          <Button cash = {.25} label = {".25"} onClick = {this.handleClick} current = {this.state.current}/>
          <Button cash = {.10} label = {".10"} onClick = {this.handleClick} current = {this.state.current}/>
          <Button cash = {.05} label = {".05"} onClick = {this.handleClick} current = {this.state.current}/>
          <Button cash = {.01} label = {".01"} onClick = {this.handleClick} current = {this.state.current}/>
        </div>
      </div>
    );
  }
});

module.exports = Input;
