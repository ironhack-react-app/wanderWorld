import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DestinationDetails = () => {

    const API_URL = "https://react-app-json-server-backend.adaptable.app"

    const { destinationId } = useParams()

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
                                <h4>Warmest Month</h4>
                                <div><p>🔥 test</p></div>
                                <h4>Rainiest Month</h4>
                                <div><p>🌧️ test</p></div>
                                <h4>Cheapest Month</h4>
                                <div><p>💸 test</p></div>
                                <h4>Best Season to go:</h4>
                                <div><p>😊 test</p></div>
                            </div>
                            <div className="price">
                                <h4>Price 7-Days</h4>
                                <h1>250€</h1>
                            </div>
                        </div>
                        <div className="buttons-wrap">
                        <button>Edit Destination</button>
                        <button>Delete Destination</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default DestinationDetails;