import FleetResponse from "./fleetbaseApi";

const getPlaces = async () => {
  try {
    const { data } = await FleetResponse.get("/places");
    return data;
  } catch (error) {
    console.error("Error fetching places:", error);
    throw error;
  }
};

export default getPlaces;
