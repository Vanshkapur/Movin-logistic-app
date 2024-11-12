import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import Header from "../../components/header/Header";
import CreateOrder from "../../components/CreateOrder/CreateOrder";
import "./CreateOrderPage.css"

function CreateOrderPage() {
  return (
    <>
      <Slider />
      <Header />
      <div className="create-order-container">
      <CreateOrder />
      <Link to="/yourOrders" className="My-order-button">Your Orders</Link>
      </div>
    </>
  );
}

export default CreateOrderPage;
