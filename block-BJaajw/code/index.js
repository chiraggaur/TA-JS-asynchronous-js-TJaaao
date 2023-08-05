let url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=30";
let newsElm = document.querySelector(".news");
let select = document.querySelector("select");
let allNews = [];

function renderNews(news) {
  newsElm.innerHTML = "";
  news.forEach((element) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = element.imageUrl;
    img.classList = "newsImage";
    img.alt = element.title;
    let div = document.createElement("div");
    div.classList = "box";
    let span = document.createElement("span");
    span.classList = "source";
    span.innerText = element.newsSite;
    let h3 = document.createElement("h3");
    h3.innerText = element.title;
    let button = document.createElement("button");
    button.innerText = "Read More";
    let anchor = document.createElement("a");
    anchor.href = element.url;
    anchor.append(button);
    li.append(img);
    div.append(span, h3, anchor);
    newsElm.append(li, div);
  });
}

function displayOptions(allSources) {
  allSources.forEach((element) => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    select.append(option);
  });
}

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error happened : ${res.status}`);
    }
    return res.json();
    // console.log(res);
  })
  .then((news) => {
    if (Array.isArray(news)) {
      allNews = news;
      renderNews(news);
      let allSources = Array.from(new Set(news.map((n) => n.newsSite)));
      displayOptions(allSources);
    }
  })
  .catch((error) => {
    newsElm.innerText = error;
  });

select.addEventListener("change", (event) => {
  let updatedSource = event.target.value;
  if (updatedSource) {
    var filteredsource = allNews.filter((n) => {
      return n.newsSite === updatedSource;
    });
  } else {
    filteredsource = allNews;
  }

  renderNews(filteredsource);
});
