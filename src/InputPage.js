import React from 'react';
import './style.css';
import SSLogo from './logo.png';
import Clovek from './Clovek';





export default function InputPage() {

  const handleLogoClick = () => {
    window.location.reload();
  };

  
  return (
    <>
      <header>

        <div className="logo" onClick={handleLogoClick}>
        <img src={SSLogo}/>
        <br></br>
        <p id='podnadpis'>simplify your workout</p>
        </div>


        <button>Login</button>


      </header>

      <div className="clovek">

      <Clovek></Clovek>

      
      </div>
      


    </>
  );
}
