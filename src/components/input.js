import React, { useState } from "react";
import Button from "./button";

const Input = ({ submitAnswer, counter, hide, btnStyle }) => {
    const [current, setCurrent] = useState(0);
    const [label, setLabel] = useState("Start!");

    const roundStart = () => {
        //causes prompt to do its own roundStart
        submitAnswer(-1);
    };
    const handleSubmit = () => {
        submitAnswer(current);
        setLabel("Try again?");
        setCurrent(0);
    };
    const handleClick = (cash) => {
        //logic for adding up button clicks
        let fixedCash = cash + current;
        fixedCash = Math.round(fixedCash * 100) / 100;
        setCurrent(fixedCash);
    };
    const buttonBuilder = (denmo, symbol) => {
        //labelhelper helps with formating for amounts less than 1
        let labelHelper = denmo;
        if (labelHelper < 1) {
            labelHelper = labelHelper * 100;
        }
        return (
            <Button
                key={denmo}
                cash={denmo}
                label={symbol + labelHelper}
                onClick={handleClick}
                current={current}
                hidden={hide}
                counterDisplay={counter}
            />
        );
    };

    //these arrays are for generating the buttons
    const bills = [20, 10, 5, 1];
    const coins = [0.25, 0.1, 0.05, 0.01];

    return (
        <div>
            <div>
                <button
                    className={btnStyle}
                    onClick={roundStart}
                    hidden={!hide}
                >
                    {label}
                </button>
                <button
                    className="btn-success btn-lg"
                    onClick={handleSubmit}
                    hidden={hide}
                >
                    Submit
                </button>
            </div>
            <div>{bills.map((bill) => buttonBuilder(bill, "$"))}</div>
            <div>{coins.map((coin) => buttonBuilder(coin, "¢"))}</div>
        </div>
    );
};

export default Input;
