import { useState, useEffect } from 'react';
import temp01 from '../images/temp01.png';
import temp02 from '../images/temp02.png';
import temp03 from '../images/temp03.png';
import temp04 from '../images/temp04.png';
import calendar from '../images/calendar.png';
import day from '../images/shortDesc01.png';
import night from '../images/shortDesc07.png';

const Forecast = ({ id }) => {
    const [forecast, setForecast] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.weather.gov/gridpoints/PSR/159,68/forecast')
            .then(res => res.json())
            .then(
                (result) => {
                    setForecast(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if(!isLoaded){
        return(
            <div className="forecastDiv">Loading...</div>
        )
    } else if(error){
        return <div className="forecastDiv" id="forecast">Error: {error.message}</div>
    } else {
        const temperature = forecast.properties.periods[id].temperature;
        const name = forecast.properties.periods[id].name;
        const shortForecast = forecast.properties.periods[id].shortForecast;
        const isDay = forecast.properties.periods[id].isDaytime;

        let tempIcon;
        let weatherIcon;

        if(isDay){
            weatherIcon = day;
        } else if(!isDay){
            weatherIcon = night;
        }

        if(temperature >= 90){
            tempIcon = temp04;
        } else if (temperature < 90 && temperature >= 70){
            tempIcon = temp03;
        } else if (temperature < 70 && temperature >= 40){
            tempIcon = temp02;
        } else if (temperature < 40){
            tempIcon = temp01;
        }

        return (
            <div className="forecastDiv">
                <br></br>
                <h1 id="forecast">
                    <img id="icon" src={calendar} alt="hang on..."></img>{name}<br></br>
                    <img id="icon" src={tempIcon} alt="hang on..."></img><span id="temperatureText">{temperature}' Fahrenheit</span><br></br>
                    <img id="icon" src={weatherIcon} alt="hang on..."></img>{shortForecast}
                </h1>
            </div>
        )
    }
}

export default Forecast
