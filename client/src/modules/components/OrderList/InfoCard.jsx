import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { getRouteCoordinates } from "../../../../src/coordinates";
import "./OrderList.css";

// Correctly using Vite environment variable
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function InfoCard({ order, onClose }) {
  const [route, setRoute] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchCoordinates = async () => {
      setLoading(true); // Start loading before fetching data
      try {
        const routeCoordinates = await getRouteCoordinates(
          order.senderAddress,
          order.receiverAddress
        );
        setRoute(routeCoordinates);
      } catch (error) {
        console.error("Failed to fetch route coordinates:", error);
        setRoute([]); // Set route to empty if there is an error
      } finally {
        setLoading(false); // End loading after fetching data
      }
    };

    fetchCoordinates();
  }, [order.senderAddress, order.receiverAddress, apiKey]); // Include apiKey if it could change

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter =
    route.length > 0 ? route[0] : { lat: 41.3851, lng: 2.1734 };

  if (!apiKey) {
    return (
      <p>
        Google Maps API key is not set. Please check your environment
        configuration.
      </p>
    );
  }

  if (loading) {
    return <div>Loading map...</div>; // Provide feedback while loading
  }

  return (
    <div className="info-card-overlay" onClick={onClose}>
      <div className="info-card" onClick={(e) => e.stopPropagation()}>
        <div className="info-card-header">
          <h3>{order.packageDetails}</h3>
          {/* <span className="status">{order.status}</span> */}
        </div>
        <div className="info-card-body">
          {/* <img src={order.photo} alt="Product" className="info-card-photo" /> */}
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              {route.length > 0 && (
                <>
                  <Marker position={route[0]} />
                  <Marker position={route[route.length - 1]} />
                  <Polyline path={route} options={{ strokeColor: "#FF0000" }} />
                </>
              )}
            </GoogleMap>
          </LoadScript>
          <p>
            <strong>Sender Address:</strong> {order.senderAddress}
          </p>
          <p>
            <strong>Receiver Address:</strong> {order.recipientAddress}
          </p>
          <button className="track-button" aria-label="Track Package">
            Track Package
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
