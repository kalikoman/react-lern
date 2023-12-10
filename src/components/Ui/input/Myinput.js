import React from 'react';
import classes from './Myinput.module.css';
const Myinput = (props) => {
    return (
        <input {...props} className={classes.myInput}/>
    );
};

export default Myinput;
