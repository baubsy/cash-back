import React, { useState, useEffect } from "react";

const Button = ({ hidden, cash, current, onClick, label, counterDisplay }) => {
    //state keeps track of button presses for denomination counter option
    const [counter, setCounter] = useState(0);
    //resets state between rounds, reads button hidden status to detect new round
    useEffect(() => {
        if (hidden && counter !== 0) {
            setCounter(0);
        }
    }, [hidden, counter]);
    const handleButton = () => {
        setCounter(counter + 1);
        let fixedCash = cash + current;

        fixedCash.toFixed(2);
        onClick(cash);
    };
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
