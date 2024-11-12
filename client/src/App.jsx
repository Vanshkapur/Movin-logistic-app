import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./modules/pages/HomePage";
import RegisterPage from "./modules/pages/RegisterPage";
import CreateOrderPage from "./modules/pages/CreateOrder/CreateOrderPage";
import LoginPage from "./modules/pages/LoginPage";
import YourOrders from './modules/pages/YourOrders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="/register" element ={<RegisterPage />} />
        <Route path="/create-order" element ={<CreateOrderPage />} />
        <Route path="/login" element ={<LoginPage />} />
        <Route path= "/yourOrders" element={<YourOrders/>} />
      </Routes>
    </Router>
  );
}

export default App;
