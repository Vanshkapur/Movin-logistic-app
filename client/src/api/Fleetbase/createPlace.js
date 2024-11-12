import FleetResponse from "./fleetbaseApi";

const createPlace = async (placeData) => {
  try {
    const { data } = await FleetResponse.post("/places", placeData);
    return data;
  } catch (error) {
    console.error("Error creating place:", error);
    throw error;
  }
};

export default createPlace;
