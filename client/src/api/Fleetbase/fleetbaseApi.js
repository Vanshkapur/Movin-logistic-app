import axios from "axios";


const FleetResponse = axios.create({
  baseURL: "http://localhost:8000/v1/places",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer flb_live_ySr03ujGJwtFUoE6TL52",
  },
});

export default FleetResponse;
