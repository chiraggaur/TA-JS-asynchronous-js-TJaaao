let dropdown = document.querySelector("#DropDown");

function fetch(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      res(JSON.parse(xhr.response));
    };
    xhr.onerror = () => {
      rej("Something went wrong");
    };
    xhr.send();
  });
}
function removeDuplicates(arr) {
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  newArr.forEach((element) => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    dropdown.append(option);
  });
}
function DropDownList(event) {
  //   console.log(event.target);
  //   if (event.keyCode === 13) {
  let outcome = fetch(
    "https://api.spaceflightnewsapi.net/v3/articles?_limit=30"
  ).then((info) => {
    let array = [];
    for (let i = 0; i < info.length; i++) {
      array.push(info[i].title.split(" ").slice(0, 1).join());
    }
    removeDuplicates(array);
  });
}
// }

dropdown.addEventListener("click", DropDownList);

// new data
let news1 = document.querySelector(".imageBox");

function createImage(source) {
  source.forEach((element) => {
    // let news1 = document.createElement("div");
    // news1.classList = "news_1";
    let container = document.createElement("div");
    container.classList = "imgContainer";
    let img = document.createElement("img");
    img.src = element.imageUrl;
    img.classList = "newsImage";
    container.append(img);
    news1.append(container);
  });
}

function newImage(event) {
  let imagesData = fetch(
    "https://api.spaceflightnewsapi.net/v3/articles?_limit=30"
  ).then((data) => {
    createImage(data);
  });
}
newImage();

// text of news

let contentBox = document.querySelector(".contentBox");

function createContext(source) {
  source.forEach((element) => {
    let content = document.createElement("div");
    content.classList = "innerContent";
    let h2 = document.createElement("h2");
    h2.classList = "title";
    h2.innerText = element.title;
    let p = document.createElement("p");
    p.classList = "newtext";
    p.innerText = element.summary;
    let readMore = document.createElement("p");
    let a = document.createElement("a");
    a.href = element.url;
    a.classList = "readMe";
    a.innerText = "Read Me";
    readMore.append(a);
    content.append(h2, p, readMore);
    contentBox.append(content);
  });
}

function newsContent(event) {
  let context = fetch(
    "https://api.spaceflightnewsapi.net/v3/articles?_limit=30"
  ).then((data) => {
    createContext(data);
  });
}
newsContent();
