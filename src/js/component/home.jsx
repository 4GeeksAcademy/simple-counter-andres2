import React from "react";
import { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Counter = () => {
    const [seconds, setSeconds] = useState(0);
    const [digits, setDigits] = useState([0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const digitsArray = seconds.toString().padStart(6, '0').split('');
            setDigits(digitsArray);
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className='numberedCard container-fluid'>

            <h5>{digits[0]}</h5>
            <h5>{digits[0]}</h5>
            <h5>{digits[0]}</h5>
            <h5>{digits[0]}</h5>
            <h5>{digits[0]}</h5>
            <h5>{digits[0]}</h5>

        </div>
    );
};


export default Counter;
