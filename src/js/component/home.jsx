import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const counter = () => {
    const [segundos, setSeconds] = useState (0);
    const [digitos, setDigits] = useState ([0,0,0,0,0,0]);

    useEffect (() => {
        const interval = setInterval(() => {
            const digitsArray = seconds.toString().padStart(6,'0').split('');
                setDigits(digitsAray);
                setSeconds ((prevSeconds) => prevSeconds +1);
        }, 1000);

    return () => clearInterval(interval);
}, [seconds]);

return (
    <div className='numberedCard'>

        <H5>{digits[0]}</H5>
        <H5>{digits[0]}</H5>
        <H5>{digits[0]}</H5>
        <H5>{digits[0]}</H5>
        <H5>{digits[0]}</H5>
        <H5>{digits[0]}</H5>

    </div>
  );
};


export default counter;
