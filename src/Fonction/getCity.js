
export const getWeatherByLatLong = (lat,long,keyApi) => {
   if(lat&long){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${keyApi}`)
    .then((response)=>{
      return response.json()
    })
    .then((data) => {
      console.log(data);
    })
  }
}
