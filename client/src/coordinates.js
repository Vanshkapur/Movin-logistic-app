import axios from "axios";

export const getCoordinates = async (address) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Using Vite environment variable
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address,
          key: apiKey, // Pass the API key correctly
        },
      }
    );
    const { lat, lng } = response.data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error("Error converting address to coordinates:", error);
    return { lat: 0, lng: 0 }; // Fallback coordinates
  }
};

export const getRouteCoordinates = async (senderAddress, receiverAddress) => {
  const senderCoordinates = await getCoordinates(senderAddress);
  const receiverCoordinates = await getCoordinates(receiverAddress);
  return [senderCoordinates, receiverCoordinates];
};
 