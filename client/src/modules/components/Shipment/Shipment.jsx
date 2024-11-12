import { useState } from "react";
import "./Shipment.css";

function Shipment() {
  const [trackingType, setTrackingType] = useState("shipment");

  const handleTrackingTypeChange = (event) => {
    setTrackingType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="tracking-container">
      <form className="tracking-form" onSubmit={handleSubmit}>
        <div className="tracking-options">
          <label>
            <input
              type="radio"
              name="trackingType"
              value="shipment"
              checked={trackingType === "shipment"}
              onChange={handleTrackingTypeChange}
            />
            Shipment Tracking
          </label>
          <label>
            <input
              type="radio"
              name="trackingType"
              value="pickup"
              checked={trackingType === "pickup"}
              onChange={handleTrackingTypeChange}
            />
            Pickup Tracking
          </label>
        </div>
        <div className="tracking-input">
          <label htmlFor="trackingNumber">Tracking Number</label>
          <input
            type="text"
            id="trackingNumber"
            name="trackingNumber"
            placeholder="Enter Tracking Number"
          />
        </div>
        <button type="submit" className="track-button">
          Track
        </button>
      </form>
      <div className="promo-text">
        <h2>HAVE A PACKAGE TO SEND?</h2>
        <p>GET MOVIN.</p>
      </div>
    </div>
  );
}

export default Shipment;
