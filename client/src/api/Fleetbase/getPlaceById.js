// import FleetResponse from "./fleetbaseApi";

// const getPlaceById = async (id) => {
//   try {
//     const { data } = await FleetResponse.get(`/places/${id}`);
//     return data;
//   } catch (error) {
//     console.error("Error fetching place by ID:", error);
//     throw error;
//   }
// };

// export default getPlaceById;

import axios from "axios";

const options = {
  method: "GET",
  url: "http://localhost:8000/v1/places",
  headers: {
    Authorization: "Bearer flb_live_ySr03ujGJwtFUoE6TL52",
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
