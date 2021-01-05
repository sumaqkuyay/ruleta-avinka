import React, {useRef, useEffect, useState} from 'react';

const CountDownTimer = () => {

	const [num, setNum] = useState(30);
	// const [pause, setPause] = useState(false);

	let intervalRef = useRef();

	const decreaseNum = () => setNum((prev) => prev - 1);

	useEffect(() => {
    // setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

	// const handleClick = () => {
  //   if (!pause) {
  //     clearInterval(intervalRef.current);
  //   } else {
  //     intervalRef.current = setInterval(decreaseNum, 1000);
  //   }
  //   setPause((prev) => !prev);
  // };
  
	return(
		<div className="timer-text">
			<h1>00:{num}</h1>
			{/* <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button> */}
		</div>
	);
};
export default CountDownTimer;
