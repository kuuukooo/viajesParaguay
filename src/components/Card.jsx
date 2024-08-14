import React from 'react';
import iconoLocacion from '../images/iconoLocacion.png'

function Card (props) {
  console.log(props.item.imageUrl);
  const startDate = props.item.startDate;
  const endDate = props.item.endDate;

    return (
      <div className='card'>
        <a href={props.item.paginaUrl} target='_blank' className='card--imagen--link'><img 
          src={props.item.imageUrl}
          className='card--imagen'
        /></a>
        <div className='card--text'>
          <div className='card--stats'>
            <img src={iconoLocacion} className='card--stats--icon' />
            <h5 className='card--stats--location'>{props.item.location}</h5>
            <span className='card--stats--maps'><a href={props.item.googleMapsUrl}>Ver en Google Maps</a></span>
          </div>
          <h1 className='card--title'>{props.item.title}</h1>
          <p className='card--date'><b>{`${startDate} - ${endDate}`}</b></p>
          <p className='card--description'>{props.item.description}</p>
        </div>
      </div>
    );
}

export default Card;