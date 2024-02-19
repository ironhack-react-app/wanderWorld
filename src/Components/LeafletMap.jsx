 
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = ({destinations}) => {

  const paris = [48.86314634052172, 2.2941632958970226]
 
 
  return (
    <div>
     <MapContainer center={paris} zoom={3} scrollWheelZoom={true}>
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
                  {obj.destination}
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
