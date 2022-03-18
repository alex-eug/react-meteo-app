import { useEffect, useState } from 'react';
import {  getWeatherByLatLong } from './Fonction/getCity';
import './App.css';
import Header from './Components/Header/header';
import Main from './Components/Main/main';
const keyApi = "6df5f6b70ef5c4e862fe5907f1e19121"



function App() {
  const [lat, setLat] = useState()
  const [long, setLong] = useState()

  const geoloc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLong(position.coords.longitude);
        setLat(position.coords.latitude);
      }, () => {
        alert('Veuillez accepter la géolocalisation')
      })
    }
  }
  
  useEffect(()=>{
    geoloc()
    getWeatherByLatLong(lat,long,keyApi)
  },[lat,long])  
  

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
