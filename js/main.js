/** @format */

"use strict";

var nameSignupInput = document.getElementById("nameSignup");
var emailSignupInput = document.getElementById("emailSignup");
var paswordSignupInput = document.getElementById("passwordSignup");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var required = document.getElementById("required");
var exist = document.getElementById("exist");
var successMsg = document.getElementById("success");
var FaildMssg = document.getElementById("tryAgain");
var FillMessage = document.getElementById("FillMessage");
var IncorrectMessage = document.getElementById("IncorrectMessage");
var role = document.getElementById("role");
var rolesignup = document.getElementById("rolesignup");
var username = localStorage.getItem("sessionUserName");

var usersContainer = [];
if (localStorage.getItem("users") != null) {
  usersContainer = JSON.parse(localStorage.getItem("users"));
}
var Users = [];
if (localStorage.getItem("users") == null) {
  Users = [];
} else {
  Users = JSON.parse(localStorage.getItem("users"));
}
function SignUp() {
  userInputValidation();
  isExist();
  if (userInputValidation() && isExist() == false) {
    var user = {
      name: nameSignupInput.value,
      email: emailSignupInput.value,
      password: paswordSignupInput.value,
      role: rolesignup.value,
    };
    Users.push(user);
    localStorage.setItem("users", JSON.stringify(Users));
    console.log(Users);

    successMsg.classList.remove("d-none");
    FaildMssg.classList.add("d-none");
    nameexist.classList.add("d-none");
    setTimeout(() => {
      window.location = "index.html";
    }, 2000);
  } else {
    FaildMssg.classList.remove("d-none");
    successMsg.classList.add("d-none");
  }
}
function userNameValidation() {
  var userNameAlert = document.getElementById("userNameAlert");
  var required = document.getElementById("required");
  var regex = /^[A-Z][a-z]{3,10}(\s?[A-Z][a-z]{3,10})?$/;
  if (
    regex.test(nameSignupInput.value) == true &&
    nameSignupInput.value != ""
  ) {
    nameSignup.classList.add("is-valid");
    nameSignup.classList.remove("is-invalid");
    userNameAlert.classList.add("d-none");
    return true;
  } else if (nameSignupInput.value == "") {
    required.classList.remove("d-none");
    nameSignup.classList.add("is-invalid");
  } else {
    nameSignup.classList.remove("is-valid");
    nameSignup.classList.add("is-invalid");
    userNameAlert.classList.remove("d-none");
    return false;
  }
}

function userPassValidation() {
  var passAlert = document.getElementById("passAlert");
  var required = document.getElementById("required");
  var regex = /^.{5,15}$/;
  if (
    regex.test(paswordSignupInput.value) == true &&
    paswordSignupInput.value != ""
  ) {
    passwordSignup.classList.add("is-valid");
    passwordSignup.classList.remove("is-invalid");
    passAlert.classList.add("d-none");
    return true;
  } else if (paswordSignupInput.value == "") {
    required.classList.remove("d-none");
    passwordSignup.classList.add("is-invalid");
  } else {
    passwordSignup.classList.remove("is-valid");
    passwordSignup.classList.add("is-invalid");
    passAlert.classList.remove("d-none");
    return false;
  }
}
function useremailValidation() {
  var emailAlert = document.getElementById("emailAlert");
  var required = document.getElementById("required");
  var regex = /^[a-zA-Z]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (
    regex.test(emailSignupInput.value) == true &&
    emailSignupInput.value != ""
  ) {
    emailSignup.classList.add("is-valid");
    emailSignup.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
    return true;
  } else if (emailSignupInput.value == "") {
    required.classList.remove("d-none");
    emailSignup.classList.add("is-invalid");
  } else {
    emailSignup.classList.remove("is-valid");
    emailSignup.classList.add("is-invalid");
    emailAlert.classList.remove("d-none");
    exist.classList.add("d-none");
    return false;
  }
}

function userInputValidation() {
  if (userNameValidation() && userPassValidation() && useremailValidation()) {
    return true;
  } else {
    return false;
  }
}
function isExist() {
  for (var i = 0; i < Users.length; i++) {
    if (Users[i].email.toLowerCase() == emailSignupInput.value.toLowerCase()) {
      emailSignup.classList.remove("is-valid");
      emailSignup.classList.add("is-invalid");
      exist.classList.remove("d-none");
      return true;
    }
    if (Users[i].name.toLowerCase() == nameSignupInput.value.toLowerCase()) {
      nameSignup.classList.remove("is-valid");
      nameexist.classList.remove("d-none");
      return true;
    }
  }
  return false;
}

//************Login************* */
function login() {
  if (emailInput.value == "" && passwordInput.value == "") {
    FillMessage.classList.remove("d-none");
  } else {
    IncorrectMessage.classList.remove("d-none");
  }
  for (let index = 0; index < Users.length; index++) {
    if (
      Users[index].email.toLowerCase() == emailInput.value.toLowerCase() &&
      Users[index].password.toLowerCase() ==
        passwordInput.value.toLowerCase() &&
      Users[index].role.toLowerCase() == "customer"
    ) {
      IncorrectMessage.classList.add("d-none");
      setTimeout(() => {
        window.location = "home.html";
      }, 1000);
    }
    if (
      Users[index].email.toLowerCase() == emailInput.value.toLowerCase() &&
      Users[index].password.toLowerCase() ==
        passwordInput.value.toLowerCase() &&
      Users[index].role.toLowerCase() == "admin"
    ) {
      IncorrectMessage.classList.add("d-none");
      setTimeout(() => {
        window.location = "dashoard.html";
      }, 1000);
    }

  }

}
