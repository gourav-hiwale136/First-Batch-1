let api = "http://www.omdbapi.com/";
let input = document.querySelector("input");
let main = document.getElementById("main");

let api_key = "&apikey=c11d4bd6";
const getData = async () => {
  let res = await fetch(`${api}?s=${input.value}${api_key}`);
  // console.log(res);
  let data = await res.json();
  // console.log(data);
  let x = data.Search;
  Display(x);
};

const Delay = () => {
  setTimeout(getData, 500);
};

const Display = (movies) => {
  main.innerHTML = "";
  movies.map((el) => {
    console.log(el);
    let div = document.createElement("div");
    let title = document.createElement("h6");
    title.innerText = el.Title;
    let image = document.createElement("img");
    image.src = el.Poster;

    div.append(image, title);
    main.append(div);
  });
};
