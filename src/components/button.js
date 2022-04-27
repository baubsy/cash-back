import React, { useState, useEffect } from "react";

//example <button onClick={this.props.onClick}>
const Button = ({ hidden, cash, current, onClick, label, counterDisplay }) => {
    //state keeps track of button presses for denomination counter option
    //state = {counter: 0}
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    //resets state between rounds, reads button hidden status to detect new round
    /*
  componentDidUpdate(){
    if(this.props.hidden === true && this.state.counter !== 0){
      this.setState({counter: 0})
    }
  }
  */
    useEffect(() => {
        if (hidden && counter !== 0) {
            setCounter(0);
        }
    }, [hidden]);
    const handleButton = () => {
        //this.setState({counter: this.state.counter + 1})
        setCounter(counter + 1);
        //console.log(this.state);
        //TODO line 9 to 15 not nesscary outside of debug? see input's handleClick function
        let fixedCash = cash + current;

        fixedCash.toFixed(2);
        /*
    this.setState({
      value: fixedCash
    });
    */
        setValue(fixedCash);
        //console.log(this.state.value);

        onClick(cash);
    };

    //console.log(this.state);
    if (counterDisplay === true) {
        return (
            <button
                className="btn-lg btn-primary"
                hidden={hidden}
                onClick={handleButton}
            >
                {label}
                <div>
                    <sub>{counter}</sub>
                </div>
            </button>
        );
    }
    return (
        <button
            className="btn-lg btn-primary"
            hidden={hidden}
            onClick={handleButton}
        >
            {label}
        </button>
    );
};

export default Button;
