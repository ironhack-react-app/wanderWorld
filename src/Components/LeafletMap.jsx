import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const LeafletMap = ({destinations}) => {
  const paris = [48.86314634052172, 2.2941632958970226]
   const [center, setCenter] = useState(paris);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    
    if(destinations && destinations.length==1){
      console.log();
      
      let newcenter = destinations[0].coordination;
      console.log(newcenter);
      if(newcenter){
        setZoom(13);
        setCenter(newcenter); 
      }
      
    }

},[destinations,center]);
  
 
  return (
    <div>
     <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
     <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {destinations!=null ? (

      destinations.map((obj) => {
        
        if(obj.coordination){
          return (
            <div key={obj.id}>
              <Marker position={obj.coordination}>
                <Popup>
                  <Link to={`/destinations/${obj.id}`}>
                    {obj.destination}
                  </Link>
                </Popup>
              </Marker>
              </div>
          );
        } 
      })
      ):('') } 
    </MapContainer>
    </div>
  );
   
} 
export default LeafletMap;
