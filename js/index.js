function SignUpButtonClick() {
  let name = prompt(" what is your name? 😊");
  let gmail = prompt("what is your gmail account🤔? ");
  let username = prompt("write your username😛");
  let password = prompt("write your password😜");
  let age = prompt("how old are you?😃");
  let welcome = document.querySelector(".welcome");
  if (age > 18) {
    welcome.innerHTML = "Hi " + name + " 😍 <br/> Welcome to Edu.io";
  } else {
    welcome.innerHTML =
      "Hi " + name + " 😔<br/>You may not be old enough to use Edu.io";
  }
}

function GetStartedButtonClick() {
  let topic = prompt("what topic do you interested to learn?🤔");
  let gmail = prompt("what is your gmail account🤔? ");
  let name = prompt(" what is your name? 😊");
  let message =
    name +
    " " +
    topic +
    " 😮 " +
    " it is very cool topic when our course started about this topic we will be in touch by gmail";
  alert(message);
}

function listButtonClick() {
  let name = prompt(" what is your name? 😊");
  let gmail = prompt("what is your gmail account🤔? ");
  let age = prompt("how old are you?😃");
  let teenClassList =
    "Dear " +
    name +
    " ," +
    "classes list its on way to your gmail account👧🏻🥳🧑🏻";
  let childClassList =
    "Dear " +
    name +
    " ," +
    "classes list its on way to your gmail account🧒🏻🥳👦🏻";
  if (age < 18) {
    alert(childClassList);
  } else {
    alert(teenClassList);
  }
}

function downloadButtonClick() {
  let phoneSystem = prompt("what is your phone system ?📱 android or ios ?🤔 ");
  let name = prompt(" what is your name ?😗");
  let gmail = prompt("what is your gmail account🤔? ");
  phoneSystem = phoneSystem.toLowerCase();
  phoneSystem = phoneSystem.trim();
  let downloadMessage = document.querySelector("#download-message");
  if (phoneSystem === "android" || phoneSystem === "ios") {
    downloadMessage.innerHTML =
      "Dear " + name + " " + "download link its on way to your gmail account🥳";
  } else {
    downloadMessage.innerHTML =
      "Dear " + name + " " + "please write your correct  phone system 😔";
  }
}

let signUp = document.querySelector("#Sign-Up");
signUp.addEventListener("click", SignUpButtonClick);

let getStarted = document.querySelector("#get-started");
getStarted.addEventListener("click", GetStartedButtonClick);

let list = document.querySelector("#list");
list.addEventListener("click", listButtonClick);

let download = document.querySelector("#download");
download.addEventListener("click", downloadButtonClick);
