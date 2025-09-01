let form = document.getElementById("signup_form");

form.addEventListener("submit", signup_data_fun);
let signup_data_arr = JSON.parse(localStorage.getItem("signup_data")) || [];
function signup_data_fun() {
  event.preventDefault();
  let signup_data_obj = {
    fullname: form.fullname.value,
    e_mail: form.e_mail.value,
    password: form.password.value,
  };
  signup_data_arr.push(signup_data_obj);
  // console.log(signup_data_arr);
  localStorage.setItem("signup_data", JSON.stringify(signup_data_arr));
  window.location.href = "../Login_page/login.html";
}
