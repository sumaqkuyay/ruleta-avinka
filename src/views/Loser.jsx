import React from 'react';
import win from '../images/loser.png';
import { Link } from 'react-router-dom';

const Loser = () => {
  return(
    <>
      <div className="loser"> 
        <h1>¡Perdiste, gracias por jugar!</h1>
        <img src={win} className="miniloser" alt="img-win"></img>
      </div>
      <Link to="/" >
      <button className="restart-game">Volver a Jugar </button>
      </Link>
   </>
  );
};
export default Loser;