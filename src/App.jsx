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

  useEffect(() => {
    
    axios
      .get(API_URL + "/destinations")
      .then((response) => {
        setDestinations(response.data);
        setNewDestList(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
 
  }, []);


  
  const handleSearch = (searchKey) => {
  
    console.log(searchKey);
    let searchResult = destinations.filter((dest) => dest.destination.toLowerCase().includes(searchKey.toLowerCase()));
    console.log(searchResult);
    setDestinations(searchResult);

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
