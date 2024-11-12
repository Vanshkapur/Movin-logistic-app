import { useState, useEffect } from "react";
import Slider from "../components/slider/Slider";
import Header from "../components/header/Header";
import OrderList from "../components/OrderList/OrderList";
import axios from "../../api/axios";

function YourOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/orders")
      .then((response) => {
        setOrders(response.data.orders);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders:" + error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Slider />
      <Header />
      {error ? (
        <p>{error}</p> 
      ) : loading ? (
        <p>Loading...</p> 
      ) : (
        <OrderList orders={orders} />
      )}
    </>
  );
}


export default YourOrders;


// import { useState, useEffect } from "react";
// import axios from "../../api/axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("/api/orders")
//       .then((response) => {
//         setOrders(response.data.orders);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Failed to fetch orders");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Orders</h1>
//       <ul>
//         {orders.map((order) => (
//           <li key={order._id}>
//             {order.senderName} to {order.recipientName} - {order.packageDetails}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Orders;