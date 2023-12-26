import React from "react";
import classes from './CustomBtn.module.css';

const CustomBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.CustomBtn}>
            {children}
        </button>
    );
}

export default CustomBtn;