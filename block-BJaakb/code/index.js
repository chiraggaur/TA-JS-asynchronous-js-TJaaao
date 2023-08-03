// function fetch(url) {
//   return new Promise((res, rej) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => {
//       res(JSON.parse(xhr.response));
//     };
//     xhr.onerror = () => {
//       rej("Something went wrong");
//     };
//     xhr.send();
//   });
// }

// let outcome = fetch(`https://api.github.com/users`)
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element.login); //login name from data
//     });
//   })
//   .catch((error) => console.log("check connection"));

// applying in previous project

let search_Field = document.querySelector("#Images_Field");
// let rootImages = document.querySelector(".Images_Container");
let listing = document.querySelector(".listing");

function fetch(url, succeded) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      res(succeded(JSON.parse(xhr.response)));
    };
    xhr.onerror = () => {
      rej("Something went wrong");
    };
    xhr.send();
  });
}

function handleEvent(event) {
  if (event.keyCode === 13 && search_Field.value) {
    let outcome = fetch(
      `https://api.unsplash.com/photos/random/?client_id=Sofdy3SzO4dgQELn-8tUh6XE35Tyb3yoHfBcn5bIkRo`,
      function (info) {
        let li = document.createElement("li");
        li.classList = "ImagesList";
        let image = document.createElement("img");
        image.classList = "randomImages";
        image.src = info.urls.raw;
        li.append(image);
        listing.append(li);
      }
    ).then(() => {
      console.log("success");
    });
  }
}

search_Field.addEventListener("keyup", handleEvent);
