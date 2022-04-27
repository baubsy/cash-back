import { set } from "express/lib/application";
import React, { useState, useEffect } from "react";

import Status from "./status";

const Prompt = ({ answer, setHide, setBtnStyle, setAnswer }) => {
    //const [current, setCurrent] = useState(0);

    const [paid, setPaid] = useState(0); //need getPaid() here?
    const [target, setTarget] = useState(0);
    const [status, setStatus] = useState(
        "This is a training tool for counting cash back to customers at a cash register. Click each button for how many bills or coins of that denomination a customer would get back."
    );
    const [style, setStyle] = useState("lead");

    const randCash = () => {
        let cash = (Math.random() * (400 - 1) + 1).toFixed(2);

        return cash;
    };
    useEffect(() => {
        if (answer === -1) {
            roundStart();
        } else if (answer !== 0) {
            roundFinish(answer);
        }
    }, [answer]);
    const getPaid = (cash) => {
        let newPaid = cash;

        //gets a random number from 1 to 6 to determine amount overpaid by
        switch (Math.round(5 * Math.random())) {
            case 5:
                //1
                newPaid = (Math.trunc(parseFloat(cash) / 1) + 1).toFixed(0);
                break;
            case 4:
                //5
                newPaid = (Math.trunc(parseFloat(cash) / 5) * 5 + 5).toFixed(0);
                break;
            case 3:
                //10
                newPaid = (Math.trunc(parseFloat(cash) / 10) * 10 + 10).toFixed(
                    0
                );
                break;
            case 2:
                //20
                newPaid = (Math.trunc(parseFloat(cash) / 20) * 20 + 20).toFixed(
                    0
                );
                break;
            case 1:
                //50
                newPaid = (Math.trunc(parseFloat(cash) / 50) * 50 + 50).toFixed(
                    0
                );
                break;
            default:
                newPaid = (
                    Math.trunc(parseFloat(cash) / 100) * 100 +
                    100
                ).toFixed(0);
                break;
        }
        let fixPaid = parseFloat(newPaid).toFixed(2);
        return fixPaid;
    };
    //TODO Finish splitting roundStart and roundFinish between prompt and input, have input change state in app that gets passed as prop to prompt
    const roundStart = () => {
        let startTotal = parseFloat(randCash()).toFixed(2); //generates a total for the order
        let startPaid = getPaid(startTotal); //Generates an amount the customer has paid based on gnereated order total
        let startTarget = parseFloat(
            (parseFloat(startPaid) - parseFloat(startTotal)).toFixed(2)
        ); //TODO remove parsefloats?
        //let status = "The total was $" + startTotal + " and the customer paid $" + startPaid;
        let newStatus = `The total was $${startTotal} and the customer paid $${startPaid}`;
        //this.setState({ hide: false }); //Leave this in input, its for buttons
        //this.setState({ status: status });
        setStatus(newStatus);
        //console.log("Debug start vars " + startTotal + " " + startPaid + " " + startTarget);
        //this.setState({ total: startTotal });
        setTotal(startTotal);
        //this.setState({ paid: startPaid }); //dollar amount above randCash
        setPaid(startPaid);
        //this.setState({ target: startTarget });
        setTarget(startTarget);
        //this.setState({ current: 0 });
        //setCurrent(0);
        setAnswer(0);
        //this.setState({ style: "lead" });
        setStyle("lead");
        //this.setState({ btnStyle: "btn-success btn-lg" });
        setHide(false);
        setBtnStyle("btn-success btn-lg");
    };
    const roundFinish = (answer) => {
        let off;
        let current = answer;
        let tar = target;
        let style; //changes status color green/red dependant on right/wrong
        let btnStyle; //changes button color dependant on right/wrong
        current = Math.round(current * 100) / 100;
        tar = Math.round(tar * 100) / 100;

        let status;
        console.log(`current: ${current} target: ${tar}`);
        if (current > tar) {
            console.log("Current: " + current + " Target: " + tar);
            off = current - tar;
            status = "You gave back $" + off.toFixed(2) + " too much!";
            style = "lead text-danger";
            btnStyle = "btn-danger btn-lg";
        } else if (current < tar) {
            console.log("Current: " + current + " Target: " + tar);
            off = tar - current;
            status = "You gave back $" + off.toFixed(2) + " too little!";
            style = "lead text-danger";
            btnStyle = "btn-danger btn-lg";
        } else {
            off = 0;
            status = "You got it right!";
            style = "lead text-success";
            btnStyle = "btn-success btn-lg";
        }
        //this.setState({ hide: true });
        setHide(true);
        //this.setState({ status: status });
        setStatus(status);
        //this.setState({ label: "Try again?" }); handle in input
        //this.setState({ style: style });
        setStyle(style);
        //this.setState({ btnStyle: btnStyle });
        setBtnStyle(btnStyle);
    };
    const [total, setTotal] = useState(randCash()); //need randCash()here
    return (
        <React.Fragment>
            <Status status={status} style={style} />
        </React.Fragment>
    );
};

export default Prompt;
