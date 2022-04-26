import React, { useState } from "react";

import Input from "./input";
import Options from "./options";

const App = () => {
    const [counter, setCounter] = useState(false);

    const optionsHandler = () => {
        setCounter(!counter);
    };

    return (
        <div>
            <Options counter={counter} onToggle={optionsHandler} />
            <Input counter={counter} />
        </div>
    );
};

export default App;
