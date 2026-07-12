const email = document.getElementById("email");
const password = document.getElementById("password");
const role = document.getElementById("role");
const continueBtn = document.getElementById("continueBtn");
const loginForm = document.getElementById("loginForm");

function validateForm() {

    if (
        email.value.trim() !== "" &&
        password.value.trim() !== "" &&
        role.value !== ""
    ) {
        continueBtn.classList.remove("disabled-link");
        continueBtn.classList.add("enabled-link");
    } else {
        continueBtn.classList.remove("enabled-link");
        continueBtn.classList.add("disabled-link");
    }

}

email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
role.addEventListener("change", validateForm);

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Empty fields validation
    if (email.value.trim() === "") {
        alert("Please enter your email ID.");
        email.focus();
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {
        alert("Please enter a valid email ID.");
        email.focus();
        return;
    }

    // Password validation
    if (password.value.trim() === "") {
        alert("Please enter your password.");
        password.focus();
        return;
    }

    // Role validation
    if (role.value === "") {
        alert("Please select your role.");
        role.focus();
        return;
    }

    // Success
    alert("Login Successful!");

    window.location.href = "dashboard.html";

});