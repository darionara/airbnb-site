import React from 'react';

function Card(props) {
  let badgeText;
  if (props.cardItem.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.cardItem.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={`../../images/${props.cardItem.coverImg}`} alt={props.cardItem.alt} className='card-img'/>
      <div className='card-stats'>
        <img src='../images/star.png' alt='star' className='card-star'></img>
          <span>{props.cardItem.rating}</span>
          <span className='gray'>({props.cardItem.stats.reviewCount}) •</span>
          <span className='gray'>{props.cardItem.location}</span>
        </div>
        <p className='card-title'>{props.cardItem.title}</p>
        <p className='card-price'><span className='bold'>From ${props.cardItem.price}</span> / person</p>
    </div>

  )
}

export default Card;