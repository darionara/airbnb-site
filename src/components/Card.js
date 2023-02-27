import React from 'react';

function Card() {
  return (
    <div className='card'>
      <img src="./katie-zaferes.png" alt="Katie Zafires" className='card-img'/>
      <div className='card-stats'>
        <img src='./star.png' alt='star' className='card-star'></img>
          <span>5.0</span>
          <span className='gray'>(6) •</span>
          <span className='gray'>USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}

export default Card;