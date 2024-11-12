import "./Header.css";
import MovinLogo from "../../../assets/icon.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/Auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <img src={MovinLogo} alt="Movin" className="logo" />
        </div>
        <nav className="navbar-nav">
          <a href="create-order" className="nav-link">
            SHIPPING 
            {/* <span className="dropdown-arrow">▼</span> */}
          </a>
          <a href="#" className="nav-link">
            ABOUT MOVIN 
            {/* <span className="dropdown-arrow">▼</span> */}
          </a>
          <a href="#" className="nav-link">
            SERVICES
          </a>
          <a href="#" className="nav-link">
            GET IN TOUCH
          </a>
        </nav>
        <div className="navbar-contact">
          <div className="contact-number">
            <i className="fa fa-headphones"></i> 1800 121 4747
          </div>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="nav-link">
                LOGIN
              </Link>
              <Link to="/register" className="signup-button">
                SIGN UP
              </Link>
            </>
          ) : (
            <button className="nav-link logout-button" onClick={handleLogout}>
              LOGOUT
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
