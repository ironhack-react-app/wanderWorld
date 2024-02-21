import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDestinationPage = () => {

    const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

    const [destination, setDestination] = useState("")
    const [description, setDescription] = useState("")
    // const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState(null);
    const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
    const [warmestmonth, setWarmestmonth] = useState("")
    const [rainiestmonth, setRainiestmonth] = useState("")
    const [cheapestmonth, setCheapestmonth] = useState("")
    const [bestseason, setBestseason] = useState("")
    const [totalCost, setTotalCost] = useState("")

    const { destinationId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API_URL}/destinations/${destinationId}`)
            .then((response) => {
                setDestination(response.data.destination)
                setDescription(response.data.description)
                // setImage(response.data.image)
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

    const handleFileUpload = (e) => {
        setWaitingForImageUrl(true);
        console.log("The file to be uploaded is: ", e.target.files[0]);
        const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/upload`;
        const dataToUpload = new FormData();
        dataToUpload.append("file", e.target.files[0]);
        dataToUpload.append("upload_preset", import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET);

        axios.post(url, dataToUpload)
            .then((response) => {
                // to see the structure of the response
                console.log('RESPONSE ', response.data);
                // the image url is stored in the property secure_url
                setImageUrl(response.data.secure_url);
                setWaitingForImageUrl(false);
            })
            .catch((error) => {
                console.error("Error uploading the file:", error);
            });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newDetails = {
            destination: destination,
            description: description,
            image: imageUrl,
            warmestmonth: warmestmonth,
            rainiestmonth: rainiestmonth,
            cheapestmonth: cheapestmonth,
            bestseason: bestseason,
            totalCost: totalCost
        }

        axios.put(`${API_URL}/destinations/${destinationId}`, newDetails)
            .then((res) => {
                navigate(`/destinations/${destinationId}`)
                axios.get(`${API_URL}/destinations`)
                .then((response) => {
                    setDestination(response.data)
                })
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
                        type="file"
                        onChange={(e) => handleFileUpload(e)}
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
                <button type="submit" disabled={waitingForImageUrl}>Update Destination</button>
            </form>
        </div>
    );
}

export default EditDestinationPage;