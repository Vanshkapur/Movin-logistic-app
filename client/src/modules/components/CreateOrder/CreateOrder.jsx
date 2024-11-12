import { useState, useEffect} from "react";
import axios from "../../../api/axios";
import "./CreateOrder.css";

function CreateOrder() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderAddress: "",
    recipientName: "",
    recipientAddress: "",
    packageDetails: "",
    pickupDate: "",
    contactNumber: "",
    weight: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [autoFill, setAutoFill] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && autoFill) {
      setFormData((prevData) => ({
        ...prevData,
        senderName: user.name,
        senderAddress: user.address,
      }));
    }
  }, [autoFill]);

   const handleChange = (e) => {
     const { name, value, type, checked } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       [name]: type === "checkbox" ? checked : value,
     }));
   };

  const handleWeightChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      weight: e.target.value,
    }));
  };

  const handleAutoFillChange = (e) => {
    setAutoFill(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post("/api/orders/create", formData);
      console.log("Form data submitted:", response.data);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="order-container">
      <h2>Create Pickup Order</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Order Placed</p>}
      <form onSubmit={handleSubmit} className="order-form">
        <label>
          Sender's Name:
          <input
            type="text"
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Sender's Address:
          <input
            type="text"
            name="senderAddress"
            value={formData.senderAddress}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={autoFill}
            onChange={handleAutoFillChange}
          />
          Use my account details as sender's name and address
        </label>
        <label>
          Recipient's Name:
          <input
            type="text"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Recipient's Address:
          <input
            type="text"
            name="recipientAddress"
            value={formData.recipientAddress}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Package Details:
          <textarea
            name="packageDetails"
            value={formData.packageDetails}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pickup Date:
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <fieldset>
          <legend>Package Weight:</legend>
          <label>
            <input
              type="radio"
              name="weight"
              value="5kg"
              checked={formData.weight === "5kg"}
              onChange={handleWeightChange}
            />
            5kg
          </label>
          <label>
            <input
              type="radio"
              name="weight"
              value="10kg"
              checked={formData.weight === "10kg"}
              onChange={handleWeightChange}
            />
            10kg
          </label>
          <label>
            <input
              type="radio"
              name="weight"
              value="15kg"
              checked={formData.weight === "15kg"}
              onChange={handleWeightChange}
            />
            15kg
          </label>
          <label>
            <input
              type="radio"
              name="weight"
              value="25kg"
              checked={formData.weight === "25kg"}
              onChange={handleWeightChange}
            />
            25kg
          </label>
          <label>
            <input
              type="radio"
              name="weight"
              value="more than 25kg"
              checked={formData.weight === "more than 25kg"}
              onChange={handleWeightChange}
            />
            More than 25kg
          </label>
        </fieldset>
        <button type="submit" className="order-button">
          Create Order
        </button>
      </form>
    </div>
  );
}

export default CreateOrder;
