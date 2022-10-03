import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardResident from "./components/CardResident";
import FilterList from "./components/FilterList";
import LocationInfo from "./components/LocationInfo";
import getRandomNumber from "./utils/getRandomNumber";
import ErrorScreen from "./components/ErrorScreen";
import fondo from "./assets/img/fondo.svg"
import nombre from "./assets/img/nombre.svg"

function App() {
  //Guardamos una location
  const [location, setLocation] = useState();

  // Guardamos la informacion de un input y creamos una peticion para hacer submit
  const [searchInput, setSearchInput] = useState('')
  // Guardamos las sugerencias de la api
  const [suggestList, setSuggestList] = useState()
  //Comprobamos si existe un error o no
  const [hasError, setHasError] = useState(false)
  

  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput){
      id = searchInput

    }
    
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res =>{
        setHasError(false)
        setLocation(res.data)
      } )
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = event =>{
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
    

  }

  const handleChange = event => {
    if(event.target.value === '')
    {
      setSuggestList()
    }
    else{
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
    .then(res =>  setSuggestList( res.data.results))
    .catch(err => console.log(err))
    }
  }
 

  return (
    <div className="App">
      <header className="header__app">
        <img className="header__background" src={fondo} alt="" />
        <img className="header__name" src={nombre} alt="" />
      </header>
      <form  className='form__list' onSubmit={handleSubmit}>
        <input className='form__input' id='idLocation'
               placeholder="Enter a number from 1 to 126" 
               type="text" 
               onChange={handleChange}
        />
        
        <button className='form__btn'>Search</button>
        <FilterList
          suggestList={suggestList}
          setSearchInput = {setSearchInput}
        />
      </form>
      {
          hasError?
          <ErrorScreen/>
          :
          
      <>
      <LocationInfo 
        location = {location}/>

      <div className='card-container'>
        {
          location?.residents.map(url =>(
           <CardResident 
              key = {url}
              url = {url}/> 
          ))
        }
        
      </div>
      
      
      </>
      }
    </div>
  );
}

export default App;
