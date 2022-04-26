import React from "react";

const CheckBox = ({ onToggle, value, option }) => {
    let styles = { marginRight: "30px" };
    return (
        <div className="text-right" style={styles}>
            <input
                className="form-check"
                type="checkbox"
                onClick={onToggle}
                defaultChecked={value}
            />
            <label>{option}</label>
        </div>
    );
};

export default CheckBox;
