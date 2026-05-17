// CAR BUILDER TWO

import { CarBuilder } from "./scenarioOne/carBuilder.js";
import CarBuilderTwo from "./scenarioOne/carBuilderTwo.js";
import { scenarioThree } from "./scenarioThree/index.js";
import { scenarioTwo } from "./scenarioTwo/firstSolution.js";

const cardBuilderTwo = () => {
  var car = new CarBuilderTwo();
  car.addConfiguration({ type: "gps", value: "ultrasatelite" });
  car.addConfiguration({ type: "llantas", value: "desgastadas" });

  console.log(car.build());
};

const cardBuilder = () => {
  var car = new CarBuilder().addGps().addSunRoof("technical").build();
  console.log(car);
};
cardBuilderTwo();
cardBuilder();
scenarioTwo()
scenarioThree()