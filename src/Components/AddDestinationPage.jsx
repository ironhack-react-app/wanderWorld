import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDestinationPage = () => {

  const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
  //const [image, setImage] = useState("");
  const [warmestmonth, setWarmestmonth] = useState("");
  const [rainiestmonth, setRainiestmonth] = useState("");
  const [cheapestmonth, setCheapestmonth] = useState("");
  const [bestseason, setBestseason] = useState("");
  const [totalCost, setTotalCost] = useState("");


  const navigate = useNavigate();


  const handleFileUpload = (e) => {
    setWaitingForImageUrl(true);

    console.log("The file to be uploaded is: ", e.target.files[0]);
    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME2}/upload`;
    const dataToUpload = new FormData();
    dataToUpload.append("file", e.target.files[0]);
    dataToUpload.append("upload_preset", import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET2);


    axios.post(url, dataToUpload)
        .then((response) => {
            console.log('RESPONSE ', response.data);
            setImageUrl(response.data.secure_url);
            setWaitingForImageUrl(false);
        })
        .catch((error) => {
            console.error("Error uploading the file:", error);
        });
};

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newDestionation = {
      destination: destination,
      description: description,
      image: imageUrl,
      warmestmonth: warmestmonth,
      rainiestmonth: rainiestmonth,
      cheapestmonth: cheapestmonth,
      bestseason: bestseason,
      totalCost: totalCost,
    };

    axios
      .post(`${API_URL}/destinations`, newDestionation)
      .then((res) => {
         
         window.location.href="/";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="EditDestinationPage">
      <h1>Add Destination</h1>

      <form onSubmit={handleFormSubmit}>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Picture:
          <input
            type="file"
            name="image"
            onChange={(e) => handleFileUpload(e)}
          />
        </label>
        <label>
          Warmest Month:
          <input
            type="text"
            name="warmestmonth"
            onChange={(e) => setWarmestmonth(e.target.value)}
          />
        </label>
        <label>
          Rainiest Month:
          <input
            type="text"
            name="rainiestmonth"
            onChange={(e) => setRainiestmonth(e.target.value)}
          />
        </label>
        <label>
          Cheapest Month:
          <input
            type="text"
            name="cheapestmonth"
            onChange={(e) => setCheapestmonth(e.target.value)}
          />
        </label>
        <label>
          Best Season to go:
          <input
            type="text"
            name="bestseason"
            onChange={(e) => setBestseason(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="totalCost"
            onChange={(e) => setTotalCost(e.target.value)}
          />
        </label>
        <button type="submit"  disabled={waitingForImageUrl} >Create Destination</button>
      </form>
    </div>
  );
};

export default AddDestinationPage;