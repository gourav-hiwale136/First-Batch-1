let form = document.getElementById("doctorForm");
let tableBody = document.getElementById("doctorTableBody");

// Step 1: Get saved data from LocalStorage (if any)
let doctors = JSON.parse(localStorage.getItem("doctors")) || [];

// Step 2: Display saved doctors when page loads
displayDoctors(doctors);

// Step 3: Add doctor on form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let doctorId = document.getElementById("doctor_id").value;
  let specialization = document.getElementById("Specialization").value;
  let experience = document.getElementById("Experience").value;
  let email = document.getElementById("Email").value;
  let mobile = document.getElementById("Mobile").value;

  let role = "";
  if (experience >= 5) {
    role = "Senior";
  } else if (experience >= 5) {
    role = "Junior";
  } else {
    role = "Trainee";
  }

  // Create doctor object
  let doctorObj = {
    name,
    doctorId,
    specialization,
    experience,
    email,
    mobile,
    role,
  };

  // Add to array
  doctors.push(doctorObj);

  // Save in LocalStorage
  localStorage.setItem("doctors", JSON.stringify(doctors));

  // Refresh table
  displayDoctors(doctors);

  // Clear the form
  form.reset();
});

// Step 4: Function to display all doctors
function displayDoctors(data) {
  tableBody.innerHTML = "";

  data.forEach((doctor, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${doctor.name}</td>
            <td>${doctor.doctorId}</td>
            <td>${doctor.specialization}</td>
            <td>${doctor.experience}</td>
            <td>${doctor.email}</td>
            <td>${doctor.mobile}</td>
            <td>${doctor.role}</td>
            <td><button class="deleteBtn" data-id="${index}">Delete</button></td>
        `;

    tableBody.appendChild(row);
  });
}

// Step 5: Delete doctor
tableBody.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    let index = event.target.getAttribute("data-id");

    // Remove from array
    doctors.splice(index, 1);

    // Update LocalStorage
    localStorage.setItem("doctors", JSON.stringify(doctors));

    // Refresh table
    displayDoctors(doctors);
  }
});
