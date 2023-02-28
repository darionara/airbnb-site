import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <img src={`../../images/${props.img}`} alt={props.alt} className='card-img'/>
      <div className='card-stats'>
        <img src='../images/star.png' alt='star' className='card-star'></img>
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) •</span>
          <span className='gray'>{props.location}</span>
        </div>
        <p className='card-title'>{props.title}</p>
        <p className='card-price'><span className='bold'>From ${props.price}</span> / person</p>
    </div>

  )
}

export default Card;