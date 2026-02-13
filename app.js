const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
let count = 2;

const gifs = [
  "resources/cat-heart.gif",
  "resources/rusure.gif",
  "resources/3shocked-1.gif",
  "resources/4.crying.gif",
  "resources/5.crying.gif",
  "resources/idc.gif"
];

// preload gifs
gifs.forEach(src => {
  const img = new Image();
  img.src = src;
});

no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "resources/rusure.gif";
    text.innerHTML = "You meant to press YES right?🤨";
    count++;
  } else if (count == 3) {
    gif.src = "resources/3shocked-1.gif";
    text.innerHTML = "wat da heck ;-;";
    count++;
  } else if (count == 4) {
    gif.src = "resources/4.crying.gif";
    text.innerHTML = "so u just hate me, hmph";
    count++;
  } else if (count == 5) {
    gif.src = "resources/5.crying.gif";
    text.innerHTML = "WAAHHHHHHHHH PLEASE PLEASE PLEASE PLEASEEE";
    no.style.display = "none";
  }
});

yes.addEventListener("click", () => {
  gif.src = "resources/idc.gif";
  text.innerHTML = "YIPPPEEEEEEEEEEEEEE!!!";
  no.style.display = "none";

  setTimeout(() => {
    window.location.href = "choice.html";
  }, 2000);
});
