import { useState } from "react";
import InfoCard from "./InfoCard";
import "./OrderList.css";

function OrderItem({ order }) {
  const [showInfoCard, setShowInfoCard] = useState(false);

  // Function to handle the visibility toggle of the InfoCard
  const toggleInfoCard = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up further
    setShowInfoCard((prev) => !prev); // Toggle based on previous state
  };

  return (
    <>
      <div
        className="order-item"
        onClick={toggleInfoCard}
        role="button"
        aria-label="Toggle order details"
      >
        <div className="order-details">
          <h3>{order.recipientName}</h3>
          <p>{order.packageDetails}</p>
        </div>
        <div className="order-arrow">
          {/* arrow is made using &gt; */}
          <span>&gt;</span>
        </div>
      </div>

      {showInfoCard && (
        <InfoCard
          order={order}
          onClose={toggleInfoCard} // Use the toggle function which handles event stopping
        />
      )}
    </>
  );
}

export default OrderItem;
