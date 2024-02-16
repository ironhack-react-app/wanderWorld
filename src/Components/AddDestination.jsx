import { useState } from "react";

function AddDestination(props) {

  const [destination, setDestination] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [totalCoast, setTotalCoast] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

  // const destinationIds = destinations.map(destination => destination.id);
  //   const maxId = Math.max(...destinationIds);
  //   const nextId = maxId + 1;  

    const newDestination = {
     
      destination: destination,
      image: image,
      description: description,
      totalCoast: parseFloat(totalCoast)
    }

    props.addDestination(newDestination);

  }
    return(
        <section className="add-destination">
        <h3>Add Destination</h3>
        <form className="destination-item-container" onSubmit={handleSubmit}>
          <label>
            <span>Destination:</span>
            <input name="destination" type="text" placeholder="Destination"
              value={destination} onChange={(e) => { setDestination(e.target.value) }} />
          </label>

          <label>
            <span>Image:</span>
            <input name="image" type="text" placeholder="Image"
              value={image} onChange={(e) => { setImage(e.target.value) }} />
          </label>
  
          <label>
            <span>Description:</span>
            <input name="description" type="text" placeholder="Description"
              value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </label>
  
          <label>
            <span>Total Cost :</span>
            <input name="totalCoast" type="number" placeholder="Price"
              value={totalCoast} onChange={(e) => { setTotalCoast(e.target.value) }} />
          </label>
  
          <button className="btn submit" type="submit">Add Destination</button>
  
  
        </form>
      </section>
    );

}

export default AddDestination;