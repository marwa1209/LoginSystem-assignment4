/** @format */

// image slider
var mainImg = document.getElementById("main-image");
var smallimgs = document.getElementsByClassName("small-img");
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
var username = localStorage.getItem("sessionUserName");
var usersContainer = [];
for (let index = 0; index < smallimgs.length; index++) {
  smallimgs[index].onclick = function () {
    mainImg.src = smallimgs[index].src;
  };
}
