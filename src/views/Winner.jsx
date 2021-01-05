import React from 'react';
import win from '../images/win.png';
import cupon from '../images/cupon.svg';
import { Link } from 'react-router-dom';

const Winner = () => {
  return(
    <>
      <div className="winner"> 
        <h1>¡Felicidades Ganaste!</h1>
        <img src={cupon} className="cupon" alt="img-win"></img>
        <img src={win} className="miniwinner" alt="img-win"></img>
      </div>
      <Link to="/" >
      <button className="restart-game">Volver a Jugar </button>
      </Link>
   </>
  );
};
export default Winner;
