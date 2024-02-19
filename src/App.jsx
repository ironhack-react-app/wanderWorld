import { Route, Routes } from 'react-router-dom'
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
 
 
  return (
    <>
    <NavBar />
    
    <Routes>
      <Route path="/" element={<DestinationsList/>}/>
      <Route path="/destinations" element={<DestinationsList/>}/>
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
