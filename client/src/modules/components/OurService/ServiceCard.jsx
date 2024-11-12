import "./Service.css";
import service1 from "../../../assets/service1.png";

function ServiceCard() {
  return (
    <div className="card">
      <img src={service1} alt="Package" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">MOVIN Express Mid-Day</h3>
        <p className="card-description">
          Express Mid-Day service promises to deliver your shipment before 12:00
          noon, so you can have a stress-free lunch, phew!
        </p>
        <a href="#" className="card-link">
          Read More &gt;
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
