import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DestinationsList = () => {

    const API_URL = "https://react-app-json-server-backend.adaptable.app"

    const [destinations, setDestinations] = useState(null)

    useEffect(() => {
        axios.get(API_URL + "/destinations")
            .then((response) => {
                setDestinations(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div className="DestinationsList">
            {destinations === null
                ? <p>Loading...</p>
                : destinations.map((obj) => {
                    return (
                        <div className="destination-card" key={obj.id}>
                        <Link to={`/destinations/${obj.id}`}>
                           
                            <h2 className="destination-title">{obj.destination}</h2>
                           
                            <img className="item-img" src={obj.image}/>
                            <p className="destination-description">{obj.description}</p>
                            
                            
                       </Link>
                       </div>
                    )
                })
            }

        </div>
    );
}

export default DestinationsList;