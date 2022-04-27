import React, { useState, useEffect } from "react";

import Status from "./status";

const Prompt = ({ answer, setHide, setBtnStyle, setAnswer }) => {
    const [target, setTarget] = useState(0);
    const [status, setStatus] = useState(
        "This is a training tool for counting cash back to customers at a cash register. Click each button for how many bills or coins of that denomination a customer would get back."
    );
    const [style, setStyle] = useState("lead");

    const randCash = () => {
        let cash = (Math.random() * (400 - 1) + 1).toFixed(2);

        return parseFloat(cash);
    };
    //fires off the logic to start or finish a round if the answer prop updates
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
                newPaid = (Math.trunc(cash / 1) + 1).toFixed(0);
                break;
            case 4:
                //5
                newPaid = (Math.trunc(cash / 5) * 5 + 5).toFixed(0);
                break;
            case 3:
                //10
                newPaid = (Math.trunc(cash / 10) * 10 + 10).toFixed(0);
                break;
            case 2:
                //20
                newPaid = (Math.trunc(cash / 20) * 20 + 20).toFixed(0);
                break;
            case 1:
                //50
                newPaid = (Math.trunc(cash / 50) * 50 + 50).toFixed(0);
                break;
            default:
                newPaid = (Math.trunc(cash / 100) * 100 + 100).toFixed(0);
                break;
        }
        return parseFloat(newPaid);
    };
    const roundStart = () => {
        let startTotal = randCash(); //generates a total for the order
        let startPaid = getPaid(startTotal); //Generates an amount the customer has paid based on gnereated order total
        let startTarget = (startPaid - startTotal).toFixed(2); //remove back and forth toFixeds and parseFloats

        let newStatus = `The total was $${startTotal.toFixed(
            2
        )} and the customer paid $${startPaid.toFixed(2)}`;
        setStatus(newStatus);

        setTarget(startTarget);
        setAnswer(0);
        setStyle("lead");
        setHide(false);
        setBtnStyle("btn-success btn-lg");
    };
    const roundFinish = (answer) => {
        let off;
        let current = answer;
        let tar = target;
        let style = "lead text-danger"; //changes status color green/red dependant on right/wrong
        let btnStyle = "btn-danger btn-lg"; //changes button color dependant on right/wrong
        current = Math.round(current * 100) / 100;
        tar = Math.round(tar * 100) / 100;

        let status;
        if (current > tar) {
            off = current - tar;
            status = `You gave back $${off.toFixed(2)} too much!`;
        } else if (current < tar) {
            off = tar - current;
            status = `You gave back $${off.toFixed(2)} too little!`;
        } else {
            off = 0;
            status = "You got it right!";
            style = "lead text-success";
            btnStyle = "btn-success btn-lg";
        }
        setHide(true);
        setStatus(status);
        setStyle(style);
        setBtnStyle(btnStyle);
    };

    return (
        <React.Fragment>
            <Status status={status} style={style} />
        </React.Fragment>
    );
};

export default Prompt;
