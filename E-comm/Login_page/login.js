let form = document.getElementById("login_form");
let data_array = JSON.parse(localStorage.getItem("signup_data"));
form.addEventListener("submit", login_data_check_fun);

function login_data_check_fun() {
  event.preventDefault();

  let login_data_obj = {
    e_mail: form.e_mail.value,
    password: form.password.value,
  };
  let status_flag = false;
  let email_status = false;
  let password_status = false;
  for (i = 0; i < data_array.length; i++) {
    if (data_array[i].e_mail == login_data_obj.e_mail) {
      email_status = true;
      if (data_array[i].password == login_data_obj.password) {
        password_status = true;
        status_flag = true;
        localStorage.setItem(
          "username",
          JSON.stringify(data_array[i].fullname)
        );
      }
    }
  }
  if (status_flag == true) {
    alert("Login successful");
    window.location.href = "../Mainpage/index.html";
  } else if (email_status == false && password_status == true) {
    alert("please check your E-mail");
  } else if (email_status == true && password_status == false) {
    alert("please check your password");
  } else {
    alert("login failed");
  }
}
