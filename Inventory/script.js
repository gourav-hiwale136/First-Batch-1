let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let fan = document.getElementById("name");
let catagory = document.getElementById("catagory");
let brand = document.getElementById("brand");
let price = document.getElementById("price");
let deliverdBy = document.getElementById("deliveredBy");

form.addEventListener("submit", getData);
let product_arr = [];
function getData() {
  event.preventDefault();
  let obj = {
    name: fan.value,
    catagory: catagory.value,
    brand: brand.value,
    price: price.value,
    deliverdBy: deliverdBy.value,
  };

  product_arr.push(obj);
  console.log(product_arr);

  display(product_arr);
}

function display(data) {
  tbody.innerHTML = "";
for (let i = 0; i<=data.length; i++){

  let row = document.createElement("tr");
  
  let col1 = document.createElement("td");
  col1.innerText = data[i].name;
  let col2 = document.createElement("td");
  col2.innerText = data[i].catagory;
  let col3 = document.createElement("td");
  col3.innerText = data[i].brand;
  let col4 = document.createElement("td");
  col4.innerText = data[i].price;
  let col5 = document.createElement("td");
  col5.innerText = data[i].deliverdBy;
  let col6 = document.createElement("td");
  col6.innerText = "price segment";
  let col7 = document.createElement("td");
  col7.addEventListener("click", deletevalue)
  col7.innerText = "Delete";
  
  row.append(col1, col2, col3, col4, col5, col6, col7);
  tbody.append(row);
}

   
}

function deletevalue() {
  event.target.parentNode.remove();
}