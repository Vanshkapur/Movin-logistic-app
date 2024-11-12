import { useEffect, useState } from "react";
import getPlaces from "../../../api/Fleetbase/getPlaces";
import createPlace from "../../../api/Fleetbase/createPlace";
import getPlaceById from "../../../api/Fleetbase/getPlaceById";
import updatePlaceById from "../../../api/Fleetbase/updatePlaceById";
import deletePlaceById from "../../../api/Fleetbase/deletePlaceById";

function ExampleComponent() {
  const [places, setPlaces] = useState([]); // Initialize as an empty array
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await getPlaces();

        // Log the data to see what you're receiving
        console.log("API Data:", data);

        // Ensure the data is an array before setting it to state
        if (Array.isArray(data)) {
          setPlaces(data);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  const handleCreatePlace = async () => {
    const newPlace = {
      street1: "830 5th Ave, NY, NY",
    };

    try {
      const createdPlace = await createPlace(newPlace);
      setPlaces([...places, createdPlace]);
    } catch (error) {
      console.error("Error creating place:", error);
    }
  };

  const handleUpdatePlace = async (id) => {
    const updatedPlace = {
      building: "Park Area",
      city: "New York",
      country: "US",
      district: "Midtown",
      name: "Central Park Edit",
      neighborhood: "Manhattan",
      phone_country_code: "+1",
      phone_number: "212-310-6600",
      postal_code: "10065",
      province: "New York",
      street1: "830 5th Ave a ",
      type: "Park",
    };

    try {
      const updatedData = await updatePlaceById(id, updatedPlace);
      setPlaces(places.map((place) => (place.id === id ? updatedData : place)));
    } catch (error) {
      console.error("Error updating place:", error);
    }
  };

  const handleDeletePlace = async (id) => {
    try {
      await deletePlaceById(id);
      setPlaces(places.filter((place) => place.id !== id));
    } catch (error) {
      console.error("Error deleting place:", error);
    }
  };

  return (
    <div>
      <h1>Places</h1>
      <button onClick={handleCreatePlace}>Create Place</button>
      <ul>
        {places.length > 0 ? (
          places.map((place) => (
            <li key={place.id}>
              {place.name}{" "}
              <button onClick={() => handleUpdatePlace(place.id)}>Edit</button>{" "}
              <button onClick={() => handleDeletePlace(place.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No places available.</li>
        )}
      </ul>
      {selectedPlace && (
        <div>
          <h2>Selected Place</h2>
          <p>{selectedPlace.name}</p>
          {/* More details about the selected place */}
        </div>
      )}
    </div>
  );
}

export default ExampleComponent;
