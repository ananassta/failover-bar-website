import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <Link to={props.linkName} state={{data: props.data}}>{props.name}</Link>
        // add onclick for choosed type of beer
    );
};

export default Button;