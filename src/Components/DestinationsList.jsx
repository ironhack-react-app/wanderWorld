import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddDestination from "./AddDestination";
//import { FaTrashCan } from "react-icons/fa6";

const DestinationsList = ({addDestination}) => {
  const API_URL = "https://react-app-json-server-backend.adaptable.app";

  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL + "/destinations")
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  /*const deleteProduct = (destinationId) => {
    const newList = destinations.filter((destinationObj) => {
      return destinationObj.id !== destinationId;
    });
    setDestinations(newList);
  };
*/
  return (
    <>
    <div className="DestinationsList">
      {destinations === null ? (
        <p>Loading...</p>
      ) : (
        destinations.map((obj) => {
          return (
            <div className="destination-card" key={obj.id}>
              <Link to={`/destinations/${obj.id}`}>
                <h2 className="destination-title">{obj.destination}</h2>

                <img className="item-img" src={obj.image} />
                <p className="destination-description">{obj.description}</p>

              </Link>
            </div>
          );
        })
      )}
    </div>
    <AddDestination addDestination={addDestination}>Add Destination</AddDestination>
    </>
  );
};

export default DestinationsList;
/*
                <div className="btn-container">
                  <button
                    className="trash"
                    onClick={() => {
                      deleteProduct(obj.id);
                    }}
                  >
                    <FaTrashCan />
                  </button>
                </div>
                */