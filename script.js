const passwordField = document.getElementById("password-field");
const togglePasswordButton = document.getElementById("toggle-password");
const body = document.querySelector("body");

togglePasswordButton.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    body.style.backgroundColor = "red";
    togglePasswordButton.innerHTML = "hide password";
    togglePasswordButton.classList.add("active");
  } else {
    passwordField.type = "password";
    togglePasswordButton.classList.remove("active");
    togglePasswordButton.innerHTML = "show password";
    togglePasswordButton.innerHTML = "hide password";
    body.style.backgroundColor = "green";
  }
});
