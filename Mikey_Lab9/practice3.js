// get references to the input elements
const password1Input = document.getElementById("password1");
const password2Input = document.getElementById("password2");

// function to verify the passwords
function verifyPassword() {
  const password1 = password1Input.value;
  const password2 = password2Input.value;
  
  if (password1.length < 8) {
    alert("Password must be at least 8 characters long.");
  } else if (password1 !== password2) {
    alert("Passwords do not match.");
  } else {
    alert("Passwords match.");
  }
}