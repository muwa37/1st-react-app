import React from "react";
import classes from './CustomInput.module.css';

const CustomInput = ({children, ...props}) => {
    return (
        <input className = {classes.CustomInput} {...props} />
    );
}

export default CustomInput;