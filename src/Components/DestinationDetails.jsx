import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import BrokenClouds from "../WeatherIcons/Broken_clouds.png"


const api = {
    key: '502de217ab725b6fafb5151d8aa4d874',
    base: 'https://api.openweathermap.org/data/2.5/'
};

const DestinationDetails = () => {

    const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

    const { destinationId } = useParams()
    const navigate = useNavigate()
    const [destination, setDestination] = useState(null)

    useEffect(() => {
        axios.get(API_URL + "/destinations/" + destinationId)
            .then((response) => {
                setDestination(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const deleteProject = () => {
        axios.delete(API_URL + '/destinations/' + destinationId)
            .then((response) => {
                navigate("/")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const [weather, setWeather] = useState({})
    useEffect(() => {
        fetch(`${api.base}weather?q=Berlin&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWeather(data)
            })
    }, [])

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
                                {typeof weather.main !== "undefined" ? (
                                    <div className="weather">
                                       {weather.weather[0].description === "broken clouds" 
                                       && <img src={BrokenClouds}/>}
                                        <h1>{Math.round(weather.main.temp)} ºC</h1>
                                       
                                    </div>
                                ) : ('')}

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