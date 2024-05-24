const formElement = document.getElementById("saveUser");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = document.getElementById("userName").value;
  let userPassword = document.getElementById("userPassword").value;
  let user = { userName: userName, userPassword: userPassword };
  let userJson = JSON.stringify(user);

  //todo: Mandar los datos al back

  console.log(userJson);
});
