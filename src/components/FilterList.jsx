import React from 'react'
import cardFilter from './styles/cardFilter.css'

const FilterList = ({suggestList, setSearchInput}) => {
    

    console.log(suggestList)
    
    
        const handleClick = id => setSearchInput(id)

    
  return (
    <ul  className='search__list'>
        {
            suggestList?.map(location => (
                <li className='search__item' onClick={() => handleClick(location.id)}
                key = {location.id}>  {location.name}</li>
            ))
        }
    </ul>
  )
}

export default FilterList