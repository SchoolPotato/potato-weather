import { useState, useEffect } from 'react';

const Forecast = ({ id }) => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [forecast, setForecast] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://api.weather.gov/gridpoints/PSR/159,68/forecast')
            .then(res => res.json())
            .then(
                (result) => {
                    setForecast(result);
                    setIsLoaded(true);
                }
            )
    }, [])


    if(!isLoaded){
        return(
            <div>Loading...</div>
        )
    } else {
        return (
            <div>
                <br></br>
                <h1 id="forecast">
                    {forecast.properties.periods[id].name}:<br></br>
                    {forecast.properties.periods[id].temperature} Degrees, {forecast.properties.periods[id].shortForecast}
                </h1>
            </div>
        )
    }
}

export default Forecast
