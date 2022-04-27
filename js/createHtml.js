// import { clockInterval } from "./clock.js";

const body = document.querySelector("body");

export function createHtml(city) {
  body.innerHTML += `<div class="container">
  <div class="clock" id="${city.city}">
    <div class="hour" id="hour-${city.city}"></div>
    <div class="minute" id="min-${city.city}"></div>
    <div class="second" id="sec-${city.city}"></div>
  </div>
  <h2>${city.city}</h2>
</div>`;
}
