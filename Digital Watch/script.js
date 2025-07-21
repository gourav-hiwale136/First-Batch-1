let main = document.getElementById("main");

function display() {
  main.innerHTML = "";
  let time = new Date();
  let showtime = document.createElement("h1");
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  showtime.innerText = `${hour} : ${minute} : ${seconds}`;
  console.log(showtime);
  main.append(showtime);
}

setInterval(display, 2000);
