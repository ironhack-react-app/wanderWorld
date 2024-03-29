import { useState } from "react";
import { Link } from "react-router-dom";
import LeafletMap from "./LeafletMap";


const DestinationsList = ({
  filterDestinations,
  newDestList,
}) => {

  let newList = JSON.parse(localStorage.getItem("favorites"));

  const [favorites, setFavorites] = useState(newList != null ? newList : []);

  const addToFavorites = (destination) => {
    if (favorites
        .findIndex(
            (favorite) => favorite.id === destination.id) == -1) 
    {
      console.log("adding...");

      const newStateData = [...favorites, destination];

      setFavorites(newStateData);
      localStorage.setItem("favorites", JSON.stringify(newStateData));
    } else {
      console.log("removing...");
      let newfavList = favorites.filter(
        (favorite) => favorite.id != destination.id
      );
      setFavorites(newfavList);
      localStorage.setItem("favorites", JSON.stringify(newfavList));
    }
  };

  return (
    <>
      <h2 className="title">Plan your dream vacation with WanderWorld!</h2>
      <br />
      {/* <h4 className="filter">Filter</h4> */}

      <select className="continents" onChange={filterDestinations}>
        <option value="DEFAULT">Select Continent/Country</option>
        <option value="all">All destinations</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia</option>
      </select>

      <div className="DestinationsList">
      
        {!newDestList ? (
          <p>Loading...</p>
        ) : (
          newDestList.map((obj) => {
            return (
              <div className="destination" key={obj.id}>
              <div className="destination-card" >
                <div>
                  <Link to={`/destinations/${obj.id}`}>
                    <div className="destination-title-container">
                      <svg
                        className="location-tag"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                      <h2 className="destination-title">{obj.destination}</h2>
                    </div>
                    <img className="item-img" src={obj.image} />
                  </Link>
                </div>

                <div className="company-card-buttons-wrap">
                  <p className="destination-description">{obj.description} </p>
                  <button
                    onClick={() => {
                      addToFavorites(obj);
                    }}
                  >
                    {favorites.findIndex((favorite) => favorite.id === obj.id) >
                    -1 ? (
                      <svg
                        className="like-tag"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                      </svg>
                    ) : (
                      <svg
                        className="like-tag"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              </div>  
            );
          })
        )}
      
      </div>

      {newDestList === null ? (
        <p>Map is loading...</p>
      ) : (
        <LeafletMap destinations={newDestList} />
      )}
     
    </>
  );
};

export default DestinationsList;
