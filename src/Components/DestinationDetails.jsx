import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactAnimatedWeather from 'react-animated-weather'

const api = {
    key: import.meta.env.VITE_WEATHER_KEY,
    base: 'https://api.openweathermap.org/data/2.5/'
};

const DestinationDetails = () => {

    const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

    const { destinationId } = useParams()
    const navigate = useNavigate()
    const [destination, setDestination] = useState(null)
    const [weather, setWeather] = useState(null)


    useEffect(() => {
        axios.get(API_URL + "/destinations/" + destinationId)
            .then((response) => {
                setDestination(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [destinationId])

    useEffect(() => {
        if (destination !== null) {
            getWeather();
        }
    }, [destination])

    const getWeather = () => {
        axios.get(`${api.base}weather?q=${destination.destination}&units=metric&APPID=${api.key}`)
            .then((response) => {
                setWeather(response.data)
                console.log(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const deleteProject = () => {
        axios.delete(API_URL + '/destinations/' + destinationId)
            .then((response) => {
                navigate("/")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const brokenClouds = {
        icon: 'PARTLY_CLOUDY_DAY',
        size: 80,
        animate: true
    };
    const clearSky = {
        icon: 'CLEAR_DAY',
        size: 80,
        animate: true
    }
    const scatteredClouds = {
        icon: 'CLOUDY',
        size: 80,
        animate: true
    }
    const mist = {
        icon: 'FOG',
        size: 80,
        animate: true
    }
    const lightRain = {
        icon: 'RAIN',
        size: 80,
        animate: true
    }

    return (
        <div className="DestinationDetails">
            {destination === null
                ? <p>Loading...</p>
                : (<div className="destination">
                    <div className="img-card">
                        <img src={destination.image} />
                    </div>
                    <div className="info-wrap">
                        <div className="info-heading">
                            <h1>{destination.destination}</h1>
                            <p><i>{destination.description}</i></p>
                        </div>
                        <div className="info-data-weather">
                            <div className="statistics">
                                <h5>Warmest Month</h5>
                                <div><p>🔥 {destination.warmestmonth}</p></div>
                                <h5>Rainiest Month</h5>
                                <div><p>🌧️ {destination.rainiestmonth}</p></div>
                                <h5>Cheapest Month</h5>
                                <div><p>💸 {destination.cheapestmonth}</p></div>
                                <h5>Best Season to go:</h5>
                                <div><p>😊 {destination.bestseason}</p></div>
                            </div>
                            <div className="weather-price">
                                <h5>Current Weather Forecast</h5>
                                {weather === null
                                    ? <p>Loading...</p>
                                    : (<div className="weather">
                                        {weather.weather[0].description === "broken clouds"
                                            && <ReactAnimatedWeather
                                                icon={brokenClouds.icon}
                                                size={brokenClouds.size}
                                                animate={brokenClouds.animate} />}
                                        {weather.weather[0].description === "overcast clouds"
                                            && <ReactAnimatedWeather
                                                icon={brokenClouds.icon}
                                                size={brokenClouds.size}
                                                animate={brokenClouds.animate} />}
                                        {weather.weather[0].description === "few clouds"
                                            && <ReactAnimatedWeather
                                                icon={brokenClouds.icon}
                                                size={brokenClouds.size}
                                                animate={brokenClouds.animate} />}
                                        {weather.weather[0].description === "clear sky"
                                            && <ReactAnimatedWeather
                                                icon={clearSky.icon}
                                                size={clearSky.size}
                                                animate={clearSky.animate} />}
                                        {weather.weather[0].description === "scattered clouds"
                                            && <ReactAnimatedWeather
                                                icon={scatteredClouds.icon}
                                                size={scatteredClouds.size}
                                                animate={scatteredClouds.animate} />}
                                        {weather.weather[0].description === "mist"
                                            && <ReactAnimatedWeather
                                                icon={mist.icon}
                                                size={mist.size}
                                                animate={mist.animate} />}
                                        {weather.weather[0].description === "light rain"
                                            && <ReactAnimatedWeather
                                                icon={lightRain.icon}
                                                size={lightRain.size}
                                                animate={lightRain.animate} />}
                                        <h1>{Math.round(weather.main.temp)} ºC</h1>
                                    </div>
                                    )}

                                <div className="price">
                                    <h5>Price {destination.days} Days</h5>
                                    <h1>{destination.totalCost}€</h1>
                                </div>
                            </div>

                        </div>
                        <div className="buttons-wrap">
                            <Link to={`/destinations/edit/${destinationId}`}><button>Edit Destination</button></Link>
                            <button onClick={deleteProject}>Delete Destination</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default DestinationDetails;

