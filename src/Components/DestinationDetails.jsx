import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

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
                        <div className="info-data">
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
                            <div className="price">
                                <h5>Price {destination.days} Days</h5>
                                <h1>{destination.totalCost}€</h1>
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