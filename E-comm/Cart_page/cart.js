let full_name = JSON.parse(localStorage.getItem("username"));

console.log(full_name);

let user_div = document.getElementById("user_name");
let user_name = document.createElement("h1");
user_name.innerText = full_name;
user_div.append(user_name);
