const countDownDate = new Date("Mar 28, 2022 16:56:25").getTime();
// console.log(`The Current Time ${countDownDate}`);

//Set Interval Functions and get the Values of the Data
const setTimeDisplay = setInterval(() => {
  //todays date and time
  const nowItsTime = new Date().getTime();

  //distance between now and count.
  const distance = countDownDate - nowItsTime;

  //Show All The data on the Screen
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = days;
  // console.log(days);

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.getElementById("hours").textContent = hours;
  // console.log(hours);

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("minutes").textContent = minutes;
  // console.log(minutes);

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("seconds").textContent = seconds;
  // console.log(seconds);

  //If CountDown is Over then Display Data
  if (distance < 0) {
    clearInterval(setTimeDisplay);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("Expired").innerHTML = "The Time UP";
  }
}, 1000);
