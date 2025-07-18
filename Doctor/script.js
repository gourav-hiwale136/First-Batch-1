let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit", getData);

function getData() {
  event.preventDefault();
  console.log("hello");
}
