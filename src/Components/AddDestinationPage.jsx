import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDestinationPage = () => {
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [warmestmonth, setWarmestmonth] = useState("");
  const [rainiestmonth, setRainiestmonth] = useState("");
  const [cheapestmonth, setCheapestmonth] = useState("");
  const [bestseason, setBestseason] = useState("");
  const [totalCost, setTotalCost] = useState("");

  const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newDestionation = {
      destination: destination,
      description: description,
      image: image,
      warmestmonth: warmestmonth,
      rainiestmonth: rainiestmonth,
      cheapestmonth: cheapestmonth,
      bestseason: bestseason,
      totalCost: totalCost,
    };

    axios
      .post(`${API_URL}/destinations`, newDestionation)
      .then((res) => {
        navigate(`/destinations`);
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
            type="text"
            name="image"
            onChange={(e) => setImage(e.target.value)}
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
        <button type="submit">Create Destination</button>
      </form>
    </div>
  );
};

export default AddDestinationPage;
