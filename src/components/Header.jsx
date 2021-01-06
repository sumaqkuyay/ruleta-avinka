import React from 'react'
import artisanlogo from '../images/artisan-logo.png';
// import avinkalogo from '../images/avinka-logo.png';


function Header() {
  return (
      <div className="header">
        <h1>Bienvenidos a la ruleta</h1>
        <img src={artisanlogo} classname="artisan" alt="logo-artisan" />
        {/* <div className ="avinkaHeader">
          <h1>BY</h1>
          <img src={avinkalogo} alt="logo-avinka" />
        </div> */}
      </div>
  )
}

export default Header;
