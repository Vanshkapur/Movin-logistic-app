import { useState } from "react";
import axios from "../../../api/axios";
import "./Login.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/Auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post("/api/auth/login", formData);
      const userID = response.data._id;
      console.log("User logged in:", response.data);

      const userDetailsResponse = await axios.get(`/api/users/${userID}`);
      const userDetails = userDetailsResponse.data;

      const userWithAddress = {
        ...response.data,
        address: userDetails.address,
      };

      localStorage.setItem("user", JSON.stringify(userWithAddress));
      dispatch(loginSuccess(userWithAddress));
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Login Successful</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
