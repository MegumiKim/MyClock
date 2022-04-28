const worldClock = document.querySelector(".worldClock");

export function createHtml(city) {
  worldClock.innerHTML += `<div class="container">
  <div class="clock" id="${city.city}">
    <div class="hour" id="hour-${city.city}"></div>
    <div class="minute" id="min-${city.city}"></div>
    <div class="second" id="sec-${city.city}"></div>
  </div>
  <h2>${city.city}</h2>
</div>`;
}
