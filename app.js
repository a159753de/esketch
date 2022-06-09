const container = document.querySelector(".container");
const set = document.querySelector(".Set");
let n;
let div;

//initial page
for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    div = document.createElement("div");
    container.appendChild(div);
    div.style.width = `${100 / 16}%`;
    div.style.height = `${100 / 16}%`;
  }
}
colorGrids();

//maybe it will not be added in
/*
function reset() {
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      div = document.createElement("div");
      container.appendChild(div);
      div.style.width = `${100 / n}%`;
      div.style.height = `${100 / n}%`;
    }
  }
}
*/

//set button
set.addEventListener("click", function () {
  n = prompt("Please enter a number(<=100):"); //ask for number
  //判斷 n大小
  while (n > 100 || n < 0 || isNaN(n) == true) {
    n = prompt("Please enter the correct number:");
  }
  //find out all divs, then use forEach() to delete them
  const divItems = document.querySelectorAll("div");
  divItems.forEach((div) => {
    container.removeChild(div);
  });
  //create new grid based on n
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      div = document.createElement("div");
      div.classList.add(`cell`);
      container.appendChild(div);
      //let divs can fit the container
      div.style.width = `${100 / n}%`;
      div.style.height = `${100 / n}%`;
    }
  }
  // color
  colorGrids();
});

//colorgrids function
function colorGrids() {
  const divItems = document.querySelectorAll("div");
  divItems.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "rgba(255, 0, 149, 0.411)";
    });
  });
}
