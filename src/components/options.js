import React from "react";
import CheckBox from "./checkBox";
//component for selecting options such as, hide amounts, do a set?, timed?
const Options = ({ onToggle, counter }) => {
    return (
        <CheckBox
            option="Show Denomination Count"
            onToggle={onToggle}
            value={counter}
        />
    );
};

export default Options;
