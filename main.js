function submit() {
  const firstname = document.getElementById("first_name").value;
  const middlename = document.getElementById("middle_name").value;
  const lastname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const DOB = document.getElementById("date").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    alert("password too short");
  } else {
    alert("Registeration successful");
  }
  const Valid = username == "oluwatosin";
  const Valid2 = password == "020202";
  console.table({ username, password, valid, Valid2 });
}
window.addEventListener("load", () => {
  const registerButton = document.querySelector("#registerBtn");
  registerButton.addEventListener("click", submit);
});
