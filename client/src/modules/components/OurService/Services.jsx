import ServiceCard from "./ServiceCard";
import "./Service.css";

function Services() {
  return (
    <div className="service-container">
      <h1 className="OurServices"> OUR SERVICES </h1>
      <div className="card-container">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Services;
