import React from 'react';
import Button from './button';
import Status from './status';

class Input extends React.Component{
  constructor(props){
    super(props);
    this.state= {current : 0,
            total : this.randCash(),
            paid : this.getPaid(),
            target : 0,
            counterShow: this.props.counter,
            label: "Start!",
            btnStyle: "btn-success btn-lg",
            hide: true,
            style: "lead",
            status: "This is a training tool for counting cash back to customers at a cash register. Click each button for how many bills or coins of that denomination a customer would get back."};


  }
  randCash(){
      var cash = (Math.random() * (400 - 1) + 1).toFixed(2);

      return cash;
  }
  getPaid(cash){
    var newPaid = cash;
    var rand = 6 * Math.random();
    //decide how much is over paid
    //math.trunc cuts off the remainder of the division operation
    //simulates customers paying all in one type bill to get realistic amounts above the total
    if(rand > 5){
      //1
      newPaid = (Math.trunc(parseFloat(cash) / 1) + 1).toFixed(0);
      console.log("rand" + rand);
      console.log("new paid" + newPaid);
    }
    else if(rand > 4){
      //5
      newPaid = (Math.trunc(parseFloat(cash) / 5) * 5 + 5).toFixed(0);
      console.log("rand" + rand);
      console.log("new paid" + newPaid);
    }
    else if (rand > 3){
      //10
      newPaid = (Math.trunc(parseFloat(cash) / 10) * 10 + 10).toFixed(0);
      console.log("rand" + rand);
      console.log("new paid" + newPaid);
    }
    else if ( rand > 2){
      //20
      newPaid = (Math.trunc(parseFloat(cash) / 20) * 20 + 20).toFixed(0);
      console.log("rand" + rand);
      console.log("new paid" + newPaid);
    }
    else if ( rand > 1){
      //50
      newPaid = (Math.trunc(parseFloat(cash) / 50) * 50 + 50).toFixed(0);
      console.log("rand" + rand);
      console.log("new paid" + newPaid);
    }
    else{
      newPaid = (Math.trunc(parseFloat(cash) / 100) * 100 + 100).toFixed(0);
      console.log("rand" + rand);
      console.log("new paid" + newPaid);
    };

    var fixPaid = parseFloat(newPaid).toFixed(2);
    return fixPaid;



  }

  roundStart = () =>{
    var startTotal = parseFloat(this.randCash()).toFixed(2); //generates a total for the order
    var startPaid = this.getPaid(startTotal); //Generates an amount the customer has paid based on gnereated order total
    var startTarget = parseFloat((parseFloat(startPaid) - parseFloat(startTotal)).toFixed(2)); //TODO remove parsefloats?
    var status = "The total was $" + startTotal + " and the customer paid $" + startPaid;
    this.setState({hide: false});
    this.setState({status: status});
    //console.log("Debug start vars " + startTotal + " " + startPaid + " " + startTarget);
    this.setState({total: startTotal});
    this.setState({paid: startPaid});//dollar amount above randCash
    this.setState({target: startTarget});
    this.setState({current: 0});
    this.setState({style: "lead"})
    this.setState({btnStyle: "btn-success btn-lg"});

    console.log("Debug round start Total: " + this.state.total + " Paid: " + this.state.total);
  }
  //comparison happens here, maybe shouldnt
  handleSubmit = () => {
    console.log("Debug target on submit: " + this.state.target);
    //TODO move this logic somewhere else, computes amount off by
    var off;
    var current = this.state.current;
    var target = this.state.target;
    var style; //changes status color green/red dependant on right/wrong
    var btnStyle; //changes button color dependant on right/wrong
    current = Math.round(current*100)/100;
    target = Math.round(target*100)/100;

    var status;
    if(current > target){
      console.log("Current: " + current + " Target: " + target);
      off = current - target;
      status = "You paid $" + off.toFixed(2) + " too much!";
      style = "lead text-danger";
      btnStyle = "btn-danger btn-lg";
    }
    else if(current < target){
      console.log("Current: " + current + " Target: " + target);
      off = target - current;
      status = "You paid $" + off.toFixed(2) + " too little!";
      style = "lead text-danger";
      btnStyle = "btn-danger btn-lg";
    }
    else{
      off = 0;
      status = "You got it right!";
      style = "lead text-success";
      btnStyle = "btn-success btn-lg";
    }
    this.setState({hide: true});
    this.setState({status: status});
    this.setState({label: "Try again?"});
    this.setState({style: style});
    this.setState({btnStyle: btnStyle});

  }
  handleClick= (cash)=> {
    //logic for adding up button clicks
    console.log('debug button click input');
    /*
    debugCash = debugCash + 1;
    console.log(debugCash);
    */
    var fixedCash = cash + this.state.current;
    fixedCash = Math.round(fixedCash*100)/100;
    this.setState({
      current: fixedCash

    });


  }
//clean up with a map function itterating over array of denominations
  render() {
    return (
      <div>

        <Status status = {this.state.status} style = {this.state.style}/>
        <p>
        <button className = {this.state.btnStyle} onClick = {this.roundStart} hidden = {!this.state.hide}>{this.state.label}</button>
        <button className = "btn-success btn-lg" onClick = {this.handleSubmit} hidden = {this.state.hide}>Submit</button>
        </p>
        <div>
          <Button cash = {20} label = {"$20"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
          <Button cash = {10} label = {"$10"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
          <Button cash = {5} label = {"$5"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
          <Button cash = {1} label = {"$1"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
        </div>
        <div>
          <Button cash = {.25} label = {"¢25"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
          <Button cash = {.10} label = {"¢10"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
          <Button cash = {.05} label = {"¢5"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
          <Button cash = {.01} label = {"¢1"} onClick = {this.handleClick} current = {this.state.current} hidden={this.state.hide} counter = {this.props.counter}/>
        </div>
      </div>
    );
  }
};

export default Input;
