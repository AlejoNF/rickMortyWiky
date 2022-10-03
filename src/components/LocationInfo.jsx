import React from 'react'
import cardLocation from './styles/cardLocation.css'

const LocationInfo = ({location}) => {

    
  return (
    <article className='location__card'>
        <h2 className='location__name'><span className='location__data'>Name:</span>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'><span className='location__data'>Type: </span>{location?.type}</li>
            <li className='location__item'><span className='location__data'>Dimension:</span>{location?.dimension}</li>
            <li className='location__item'><span className='location__data'>Population:</span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo