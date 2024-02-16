import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import { Link } from "react-router-dom";
import Footer from './Components/Footer';
import DestinationsList from './Components/DestinationsList';
import DestinationDetails from './Components/DestinationDetails';

function App() {


  return (
    <>
    <NavBar />
    
    <Routes>
      <Route path="/" element={<DestinationsList/>}/>
      <Route path="/destinations/:destinationId" element={<DestinationDetails />}></Route>
    </Routes>

    </>
  )
}

export default App
