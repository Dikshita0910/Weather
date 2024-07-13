const API_KEY = "ca2707f1639e0d9beb332a7e1e83c0aa";
const makeIconURL = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city , units='metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
    
     const {
         weather,
         main: {  temp_min , temp ,feels_like , temp_max , pressure , humidity } ,
         wind: { speed },
         sys: { country },
         name,
    } = data;

    const {description , icon } = weather[0];

    return{
         description,
         temp,
         feels_like,
         iconURL: makeIconURL(icon),
         temp_min,
         temp_max,
         pressure,
         humidity,
         speed,
         country,
         name
    };
}

export {getFormattedWeatherData};