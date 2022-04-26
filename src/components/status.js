import React from "react";

//pass in target and current. use function on click to compare. give how far off or victory message
const Status = ({ style, status }) => {
    return <p className={style}>{status}</p>;
};

export default Status;
