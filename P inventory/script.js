let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let name = document.getElementById("name");
let catagory = document.getElementById("catagory");
let brand = document.getElementById("brand");
let price = document.getElementById("price");
let deliverdBy = document.getElementById("deliverdBy");

form.addEventListener("submit", getData);
let product_arr = [];
function getData() {
  event.preventDefault();
  let obj = {
    name: name.value,
    catagory: catagory.value,
    brand: brand.value,
    price: price.value,
    deliverdBy: deliverdBy,
  };

  product_arr.push(obj);
  console.log(product_arr);

  display();
}

function display(obj) {
  tbody.innerHTML = "";
  console.log(display);

  let row = document.createElement("tr");

  let col1 = document.createElement("td");
  col1.innerText = data.name;
  let col2 = document.createElement("td");
  col2.innerText = data.catagory;
  let col3 = document.createElement("td");
  col3.innerText = data.brand;
  let col4 = document.createElement("td");
  col4.innerText = data.price;
  let col5 = document.createElement("td");
  col5.innerText = data.deliverdBy;
  let col6 = document.createElement("td");
  col6.innerText = "price segment";
  let col7 = document.createElement("td");
  col7.innerText = "Delete";

  row.append(col1, col2, col3, col4, col5, col6, col7);
  tbody.append(row);
}
