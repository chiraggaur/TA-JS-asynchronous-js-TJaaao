let input = document.querySelector("input");
let img = document.querySelector(".userProfile");
let name = document.querySelector(".name");
let social = document.querySelector(".social");
let following = document.querySelector(".Following");
let followers = document.querySelector(".Followers");

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    successHandler(JSON.parse(xhr.response));
  };
  xhr.send();
}

function displayFollowers(username) {
  followers.innerHTML = "";
  fetch(
    `https://api.github.com/users/${username}/followers`,
    function (followersList) {
      let topFive = followersList.slice(0, 5);
      topFive.forEach((info) => {
        let li = document.createElement("li");
        li.classList = "followersList";
        let img = document.createElement("img");
        img.classList = "followersImg";
        img.src = info.avatar_url;
        li.append(img);
        followers.append(li);
      });
    }
  );
}
function displayFollowing(username) {
  following.innerHTML = "";
  fetch(
    `https://api.github.com/users/${username}/following`,
    function (followingList) {
      let topFive = followingList.slice(0, 5);
      topFive.forEach((info) => {
        let li = document.createElement("li");
        li.classList = "followingList";
        let img = document.createElement("img");
        img.classList = "followingImg";
        img.src = info.avatar_url;
        li.append(img);
        following.append(li);
      });
    }
  );
}

function handleEvent(event) {
  if (event.keyCode === 13 && input.value) {
    fetch(`https://api.github.com/users/${event.target.value}`, createUI);
    event.target.value = "";
  }
}

function createUI(userData) {
  img.src = userData.avatar_url;
  name.innerText = userData.login;
  social.innerText = "@" + userData.login;
  displayFollowers(userData.login);
  displayFollowing(userData.login);
  //   following.src = userData.following_url;
  //   followers.src = userData.followers_url;
}
input.addEventListener("keydown", handleEvent);

//cat

let catImg = document.querySelector(".catImage");
let nextCat = document.querySelector(".Next_Cat");

function handleclick() {
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
    function (catInfo) {
      catImg.src = catInfo[0].url;
    }
  );
}

nextCat.addEventListener("click", handleclick);
