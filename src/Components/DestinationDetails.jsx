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
                    
                    <h1>{destination.destination}</h1>
                </div>)
            }
        </div>
    );
}

export default DestinationDetails;