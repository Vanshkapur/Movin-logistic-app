import Slider from '../components/slider/Slider'
import Header from '../components/header/Header'
import Time from '../components/Time/Time'
import Shipment from '../components/Shipment/Shipment'
import Services from '../components/OurService/Services'
// import Component from '../components/FleetCRUD/Component'
// import ExampleComponent from '../components/FleetCRUD/Component'


function HomePage() {
  return (
    <div>
      {/* <ExampleComponent /> */}

      <Slider />
      <Header />
      <Time/>
      <Shipment/>
      <Services/>
    </div>
  )
}

export default HomePage