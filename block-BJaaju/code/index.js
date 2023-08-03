let search_Field = document.querySelector("#Images_Field");
// let rootImages = document.querySelector(".Images_Container");
let listing = document.querySelector(".listing");

function fetch(url, succeded) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    succeded(JSON.parse(xhr.response));
  };
  xhr.send();
  //   search_Field.innerText = "";
}

function handleEvent(event) {
  if (event.keyCode === 13 && search_Field.value) {
    fetch(
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
    );
  }
}

search_Field.addEventListener("keyup", handleEvent);
