let input = document.querySelector("input");
let name = document.querySelector(".name");
let social = document.querySelector(".social");
let following = document.querySelector(".Following");
let followers = document.querySelector(".Followers");

function handleEvent(event) {
  //   console.log(event.keyCode);
  if (event.keyCode === 13) {
    // console.log(event.target.value);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let Data = JSON.parse(xhr.response);
      createUI(Data);
    };
    xhr.send();
    event.target.value = " ";
  }
}

function createUI(userData) {
  name.innerText = userData.name;
  social.innerText = userData.social;
  following.innerText = `Following : ${userData.following}`;
  followers.innerText = `Followers : ${userData.followers}`;
}
input.addEventListener("keyup", handleEvent);
