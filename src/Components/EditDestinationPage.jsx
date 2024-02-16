import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDestinationPage = () => {

    const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

    const [destination, setDestination] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [warmestmonth, setWarmestmonth] = useState("")
    const [rainiestmonth, setRainiestmonth] = useState("")
    const [cheapestmonth, setCheapestmonth] = useState("")
    const [bestseason, setBestseason] = useState("")
    const [totalCost, setTotalCost] = useState("")

    const {destinationId} = useParams()
    const navigate = useNavigate()
   
    useEffect(() => {
        axios.get(`${API_URL}/destinations/${destinationId}`)
        .then((response) => {
            setDestination(response.data.destination)
            setDescription(response.data.description)
            setImage(response.data.image)
            setWarmestmonth(response.data.warmestmonth)
            setRainiestmonth(response.data.rainiestmonth)
            setCheapestmonth(response.data.cheapestmonth)
            setBestseason(response.data.bestseason)
            setTotalCost(response.data.totalCost)
        })
        .catch((e) => {
            console.log(e)
        })
    }, [destinationId])

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newDetails = {
            destination: destination,
            description: description,
            image: image,
            warmestmonth: warmestmonth,
            rainiestmonth: rainiestmonth,
            cheapestmonth: cheapestmonth,
            bestseason: bestseason,
            totalCost: totalCost
        }

        axios.put( `${API_URL}/destinations/${destinationId}`, newDetails )
        .then((res) => {
            navigate(`/destinations/${destinationId}`)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className="EditDestinationPage">
            <h1>Edit the Destination</h1>

            <form onSubmit={handleFormSubmit}>
                <label>Destination:
                    <input
                    type="text" 
                    name="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    />
                </label>
                <label>Description:
                    <input 
                    type="text" 
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>Picture:
                    <input 
                    type="text" 
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label>Warmest Month:
                    <input 
                    type="text" 
                    name="warmestmonth"
                    value={warmestmonth}
                    onChange={(e) => setWarmestmonth(e.target.value)}
                    />
                </label>
                <label>Rainiest Month:
                    <input 
                    type="text" 
                    name="rainiestmonth"
                    value={rainiestmonth}
                    onChange={(e) => setRainiestmonth(e.target.value)}
                    />
                </label>
                <label>Cheapest Month:
                    <input 
                    type="text" 
                    name="cheapestmonth"
                    value={rainiestmonth}
                    onChange={(e) => setCheapestmonth(e.target.value)}
                    />
                </label>
                <label>Best Season to go:
                    <input 
                    type="text" 
                    name="bestseason"
                    value={bestseason}
                    onChange={(e) => setBestseason(e.target.value)}
                    />
                </label>
                <label>Price:
                    <input 
                    type="text" 
                    name="totalCost"
                    value={totalCost}
                    onChange={(e) => setTotalCost(e.target.value)}
                    />
                </label>
                <button type="submit">Update Destination</button>
            </form>
        </div>
    );
}
 
export default EditDestinationPage;