import { Route, Routes } from 'react-router-dom'
import { useState } from "react";
import './App.css'
import NavBar from './Components/NavBar'
import { Link } from "react-router-dom";
import Footer from './Components/Footer';
import DestinationsList from './Components/DestinationsList';
import DestinationDetails from './Components/DestinationDetails';
import EditDestinationPage from './Components/EditDestinationPage';

function App() {

  const [destinations, setDestinations] = useState(null);

  const addDestination = (newDestination) => {
    setDestinations([...destinations, newDestination]);
  }


  return (
    <>
    <NavBar />
    
    <Routes>
      <Route path="/" element={<DestinationsList destinations={destinations} addDestination={addDestination}/>}/>
      <Route path="/destinations/:destinationId" element={<DestinationDetails />}></Route>
      <Route path="/destinations/edit/:destinationId" element={ <EditDestinationPage /> } />
    </Routes>
    
    </>
  )
}

export default App
