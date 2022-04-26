import React from "react";
import Button from "./button";
import Status from "./status";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            total: this.randCash(),
            paid: this.getPaid(),
            target: 0,
            counterShow: this.props.counter,
            label: "Start!",
            btnStyle: "btn-success btn-lg",
            hide: true,
            style: "lead",
            status: "This is a training tool for counting cash back to customers at a cash register. Click each button for how many bills or coins of that denomination a customer would get back.",
        };
    }
    randCash() {
        let cash = (Math.random() * (400 - 1) + 1).toFixed(2);

        return cash;
    }
    getPaid(cash) {
        let newPaid = cash;
        let rand = 6 * Math.random();
        //decide how much is over paid
        //math.trunc cuts off the remainder of the division operation
        //simulates customers paying all in one type bill to get realistic amounts above the total
        if (rand > 5) {
            //1
            newPaid = (Math.trunc(parseFloat(cash) / 1) + 1).toFixed(0);
            console.log("rand" + rand);
            console.log("new paid" + newPaid);
        } else if (rand > 4) {
            //5
            newPaid = (Math.trunc(parseFloat(cash) / 5) * 5 + 5).toFixed(0);
            console.log("rand" + rand);
            console.log("new paid" + newPaid);
        } else if (rand > 3) {
            //10
            newPaid = (Math.trunc(parseFloat(cash) / 10) * 10 + 10).toFixed(0);
            console.log("rand" + rand);
            console.log("new paid" + newPaid);
        } else if (rand > 2) {
            //20
            newPaid = (Math.trunc(parseFloat(cash) / 20) * 20 + 20).toFixed(0);
            console.log("rand" + rand);
            console.log("new paid" + newPaid);
        } else if (rand > 1) {
            //50
            newPaid = (Math.trunc(parseFloat(cash) / 50) * 50 + 50).toFixed(0);
            console.log("rand" + rand);
            console.log("new paid" + newPaid);
        } else {
            newPaid = (Math.trunc(parseFloat(cash) / 100) * 100 + 100).toFixed(
                0
            );
            console.log("rand" + rand);
            console.log("new paid" + newPaid);
        }

        let fixPaid = parseFloat(newPaid).toFixed(2);
        return fixPaid;
    }

    roundStart = () => {
        let startTotal = parseFloat(this.randCash()).toFixed(2); //generates a total for the order
        let startPaid = this.getPaid(startTotal); //Generates an amount the customer has paid based on gnereated order total
        let startTarget = parseFloat(
            (parseFloat(startPaid) - parseFloat(startTotal)).toFixed(2)
        ); //TODO remove parsefloats?
        let status =
            "The total was $" +
            startTotal +
            " and the customer paid $" +
            startPaid;
        this.setState({ hide: false });
        this.setState({ status: status });
        //console.log("Debug start vars " + startTotal + " " + startPaid + " " + startTarget);
        this.setState({ total: startTotal });
        this.setState({ paid: startPaid }); //dollar amount above randCash
        this.setState({ target: startTarget });
        this.setState({ current: 0 });
        this.setState({ style: "lead" });
        this.setState({ btnStyle: "btn-success btn-lg" });

        console.log(
            "Debug round start Total: " +
                this.state.total +
                " Paid: " +
                this.state.total
        );
    };
    //comparison happens here, maybe shouldnt
    handleSubmit = () => {
        console.log("Debug target on submit: " + this.state.target);
        //TODO move this logic somewhere else, computes amount off by
        let off;
        let current = this.state.current;
        let target = this.state.target;
        let style; //changes status color green/red dependant on right/wrong
        let btnStyle; //changes button color dependant on right/wrong
        current = Math.round(current * 100) / 100;
        target = Math.round(target * 100) / 100;

        var status;
        if (current > target) {
            console.log("Current: " + current + " Target: " + target);
            off = current - target;
            status = "You gave back $" + off.toFixed(2) + " too much!";
            style = "lead text-danger";
            btnStyle = "btn-danger btn-lg";
        } else if (current < target) {
            console.log("Current: " + current + " Target: " + target);
            off = target - current;
            status = "You gave back $" + off.toFixed(2) + " too little!";
            style = "lead text-danger";
            btnStyle = "btn-danger btn-lg";
        } else {
            off = 0;
            status = "You got it right!";
            style = "lead text-success";
            btnStyle = "btn-success btn-lg";
        }
        this.setState({ hide: true });
        this.setState({ status: status });
        this.setState({ label: "Try again?" });
        this.setState({ style: style });
        this.setState({ btnStyle: btnStyle });
    };
    handleClick = (cash) => {
        //logic for adding up button clicks
        console.log("debug button click input");
        /*
    debugCash = debugCash + 1;
    console.log(debugCash);
    */
        var fixedCash = cash + this.state.current;
        fixedCash = Math.round(fixedCash * 100) / 100;
        this.setState({
            current: fixedCash,
        });
    };
    buttonBuilder = (denmo, symbol) => {
        console.log(denmo);
        console.log(this.state.hide);
        //labelhelper helps with formating for amounts less than 1
        var labelHelper = denmo;
        if (labelHelper < 1) {
            labelHelper = labelHelper * 100;
        }
        return (
            <Button
                cash={denmo}
                label={symbol + labelHelper}
                onClick={this.handleClick}
                current={this.state.current}
                hidden={this.state.hide}
                counterDisplay={this.props.counter}
            />
        );
    };
    //clean up with a map function itterating over array of denominations
    render() {
        //these arrays are for generating the buttons
        const bills = [20, 10, 5, 1];
        const coins = [0.25, 0.1, 0.05, 0.01];

        return (
            <div>
                <Status status={this.state.status} style={this.state.style} />
                <p>
                    <button
                        className={this.state.btnStyle}
                        onClick={this.roundStart}
                        hidden={!this.state.hide}
                    >
                        {this.state.label}
                    </button>
                    <button
                        className="btn-success btn-lg"
                        onClick={this.handleSubmit}
                        hidden={this.state.hide}
                    >
                        Submit
                    </button>
                </p>
                <div>{bills.map((bill) => this.buttonBuilder(bill, "$"))}</div>
                <div>{coins.map((coin) => this.buttonBuilder(coin, "¢"))}</div>
            </div>
        );
    }
}

export default Input;
