import { useState, useEffect } from "react";
import "./Time.css";
import backgroundImage from "../../../assets/backgroundImage.png";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour12: false });
  };

  return (
    <div className="background-container">
      <div className="clock">
        {formatTime(time)}
      </div>
      <div className="image-container">
        <img src={backgroundImage} alt="Background" className="background-img" />
      </div>
      {/* <div className="action-buttons">
        <button className="action-button">Track Shipment</button>
        <button className="action-button">Create Shipment</button>
        <button className="action-button">Request Pick Up</button>
        <button className="action-button">Serviceability Check</button>
        <button className="action-button">Get a Quote</button>
      </div> */}
    </div>
  );
}

export default Time;
