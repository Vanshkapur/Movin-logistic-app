// import Fleetbase from "@fleetbase/sdk";
import Fleetbase from "../node_modules/@fleetbase/sdk/src/fleetbase";
// const Fleetbase = require("../Server/node_modules/@fleetbase/sdk/src/fleetbase");

const fleetbase = new Fleetbase("flb_live_hwBpv0CbfDyEnVKftdaC");

async function orderFunction() {
  try {
    const order = await fleetbase.orders.create({
      pickup: "Singapore 018971",
      dropoff: "321 Orchard Rd, Singapore",
      entities: [
        {
          destination: 0,
          name: "UltraHD 4K Smart TV",
          description:
            "65-inch high-definition smart TV with vibrant colors and a sleek design.",
          currency: "SGD",
          price: 800.0,
        },
      ],
    });
    console.log(order); // To see the output of the order creation
  } catch (error) {
    console.error("Error creating order:", error);
  }
}

orderFunction();
