const username = "oluwatosin";

function login() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;


  
  if (username.value === 'myusername' && password.value === 'mypassword') {
    alert("Login successful!");
   //--- window.location.href = 'dashboard.html'; // redirect to dashboard page
  } else {
    alert("Invalid username or password!");
  }
};
