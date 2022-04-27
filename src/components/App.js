import React, { useState } from "react";

import Input from "./input";
import Options from "./options";
import Prompt from "./Prompt";

const App = () => {
    const [counter, setCounter] = useState(false);
    const [answer, setAnswer] = useState(0);
    const [hide, setHide] = useState(true);
    const [btnStyle, setBtnStyle] = useState("btn-success btn-lg");

    const optionsHandler = () => {
        setCounter(!counter);
    };

    return (
        <div>
            <Options counter={counter} onToggle={optionsHandler} />
            <Prompt
                answer={answer}
                setHide={setHide}
                setBtnStyle={setBtnStyle}
                setAnswer={setAnswer}
            />
            <Input
                counter={counter}
                submitAnswer={setAnswer}
                hide={hide}
                setHide={setHide}
                btnStyle={btnStyle}
                setBtnStyle={setBtnStyle}
            />
        </div>
    );
};

export default App;
