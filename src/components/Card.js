import React from 'react';

function Card() {
  return (
    <div className='card'>
      <img src="./katie-zaferes.png" alt="Katie Zafires" className='card-img'/>
      <div className='card-stats'>
        <img src='./star.png' alt='star'></img>
          <span>5.0</span>
          <span>(6) •</span>
          <span>USA</span>
        </div>
        <p className='card-title'>Life lessons with Katie Zaferes</p>
        <p className='card-price'><span>From $136</span> / person</p>
    </div>
  )
}

export default Card;