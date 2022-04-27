export function moveClockHands(city, timeDifference) {
  try {
    const hourHand = document.querySelector("#hour" + "-" + city);
    const minuteHand = document.querySelector("#min" + "-" + city);
    const secondHand = document.querySelector("#sec" + "-" + city);

    const today = new Date();
    const hour = today.getHours() + timeDifference;
    const minute = today.getMinutes();
    const second = today.getSeconds();

    // hour 12/360deg = 30deg
    // minute 60/360deg = 6deg
    // second 60/360deg = 6deg

    const hourDeg = hour * 30;
    const minuteDeg = minute * 6;
    const secondDeg = second * 6;

    hourHand.style.rotate = `${hourDeg}deg`;
    minuteHand.style.rotate = `${minuteDeg}deg`;
    secondHand.style.rotate = `${secondDeg}deg`;
  } catch (e) {
    console.log(e);
  }
}
