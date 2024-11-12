import OrderItem from "./OrderItem";
import "./OrderList.css";

function OrderList({ orders }) {
  console.log(orders);
  if (orders.length === 0) {
    return <p>No orders found. Please check back later.</p>;
  }
  return (
    <div className="order-list">
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;
