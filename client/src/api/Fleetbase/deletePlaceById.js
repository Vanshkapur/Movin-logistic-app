import FleetResponse from "./fleetbaseApi";

const deletePlaceById = async (id) => {
  try {
    const { data } = await FleetResponse.delete(`/places/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting place by ID:", error);
    throw error;
  }
};

export default deletePlaceById;
