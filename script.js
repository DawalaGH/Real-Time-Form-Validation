function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").ariaValueMax;
  const pass = document.getElementById("password").ariaValueMax;
  const age = document.getElementById("age").ariaValueMax;
  const msgBox = document.getElementById("Message");

  let message = "";

  if (email === "") {
    message = "Enter an email.";
    msgBox.style.color = "red";
  } else if (pass === "") {
    message = "Enter a password.";
    msgBox.style.color = "red";
  } else if (age === "") {
    message = "Enter your age.";
    msgBox.style.color = "red";
  } else {
    message = "Login Successful!";
    msgBox.style.color = "green";
  }
  msgBox.innerText = message;
}
