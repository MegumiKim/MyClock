import { createHtml } from "./createHtml.js";
import { moveClockHands } from "./clock.js";

const cities = [
  { city: "Oslo", timeDifference: 0 },
  { city: "Tokyo", timeDifference: 7 },
  { city: "Havana", timeDifference: -6 },
  { city: "Antananarivo", timeDifference: 1 },
];

cities.forEach((city) => {
  createHtml(city);
});

let counter = 0;
const clockInterval = setInterval(function startClock() {
  // Counter for testing
  // counter++;
  // if (counter === 5) {
  //   clearInterval(clockInterval);
  // }
  cities.forEach((city) => {
    moveClockHands(city.city, city.timeDifference);
  });
}, 1000);
