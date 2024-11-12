import FleetResponse from "./fleetbaseApi";

const updatePlaceById = async (id, placeData) => {
  try {
    const { data } = await FleetResponse.put(`/places/${id}`, placeData);
    return data;
  } catch (error) {
    console.error("Error updating place by ID:", error);
    throw error;
  }
};

export default updatePlaceById;
