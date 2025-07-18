let api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD-zGg0TV5A2QMip5kChktwwCSemed-4fY";
let main = document.getElementById("main");
let input = document.getElementById("comman");
const getData = async () => {
  let res = await fetch(`${api}&q=${input.value}`);
  // console.log(res.json());
  let data = await res.json();
  // console.log(data.items);
  console.log(data);

  dispaly(data.items);
};

// getData()

function deley() {
  setTimeout(getData, 2000);
}

const dispaly = (abc) => {
  main.innerHTML = "";
  // console.log(abc);
  abc.map((el) => {
    //   console.log(el.id.videoId);
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`;
    let title = document.createElement("h3");
    title.innerText = title.value;
    let div = document.createElement("div");

    main.append(iframe);
    main.append(div);
  });
};
