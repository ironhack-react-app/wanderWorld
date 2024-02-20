import { Route, Routes } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";

import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer';
import DestinationsList from './Components/DestinationsList';
import DestinationDetails from './Components/DestinationDetails';
import EditDestinationPage from './Components/EditDestinationPage';
import AddDestinationPage from './Components/AddDestinationPage';
import FavoritesPage from './Components/FavoritesPage';
import LeafletMap from './Components/LeafletMap';



function App() {

  const [destinations, setDestinations] = useState([]);
  const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;
  const [newDestList, setNewDestList] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    
    axios
      .get(API_URL + "/destinations")
      .then((response) => {
        setDestinations(response.data);
        setNewDestList(response.data)
       })
      .catch((e) => {
        console.log(e);
      });
 
  }, []);


  
  const fetchWithQuery = (query) => {
      
      axios
      .get(API_URL + "/destinations?destination_like="+query)
      .then((response) => {
          setNewDestList(response.data)
       })
      .catch((e) => {
        console.log(e);
      });
      
       //let searchResult = destinations.filter((dest) => dest.destination.toLowerCase().includes(query.toLowerCase()));
      //setNewDestList(searchResult);
  }

  useEffect(() => {
      fetchWithQuery(query)
  },[query]);


  const handleSearch = (query) => {
    setQuery(query)

  }


  const filterDestinations = (event) => {
    
    const continent = event.target.value;

    if (continent === "all") {
      setNewDestList(destinations)
     } else {      
      const filtered = destinations.filter(dest => dest.continent === continent)
      setNewDestList(filtered);
     }
  }

  return (
    <>
    <NavBar handleSearch={handleSearch}/>
    
    <Routes>
      <Route path="/" element={<DestinationsList destinations={destinations} filterDestinations={filterDestinations} newDestList={newDestList}/>}/>
      {/* <Route path="/destinations" element={<DestinationsList  filterDestinations={filterDestinations} newDestList={newDestList}/>}/> */}
      <Route path="/destinations/:destinationId" element={<DestinationDetails />}></Route>
      <Route path="/destinations/edit/:destinationId" element={ <EditDestinationPage /> } />
      <Route path="/destinations/create" element={ <AddDestinationPage /> } />
      <Route path="/destinations/favorites" element={ <FavoritesPage /> } />

    </Routes>
    <Footer />
    
    </>
  )
}

export default App