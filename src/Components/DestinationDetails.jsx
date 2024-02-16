import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DestinationDetails = () => {

    const API_URL = "https://react-app-json-server-backend.adaptable.app"

    const {destinationId} = useParams()

    const {destination, setDestination} = useState()

    useEffect(() => {
        axios.get(API_URL + "/destinations" + destinationId)
        .then((response) => {
            setDestination(response.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <div className="DestinationDetails">
            
        </div>
    );
}
 
export default DestinationDetails;