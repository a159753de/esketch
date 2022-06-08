const container = document.querySelector(".container");
const normal = document.querySelector(".normal");
const small = document.querySelector(".small");
//create grids divs
let array = [];
let cell = document.createElement("div");
for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    cell.classList.add(`cell`);
    container.appendChild(cell);
    array.push(cell);
  }
}
hover();

//color grids
function hover() {
  array.forEach((e) => {
    e.addEventListener("mouseover", function () {
      e.style.backgroundColor = "rgba(255, 0, 149, 0.411)";
    });
  });
}

//click button

normal.addEventListener("click", function () {
  container.removeChild(cell);
  normalGrids();
});
small.addEventListener("click", function () {
  container.removeChild(cell);
  smallGrids();
});

//normal(還沒成功)
function normalGrids() {
  let array = [];
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      cell.classList.add(`cell`);
      container.appendChild(cell);
      array.push(cell);
    }
  }
  hover();
}

//small
function smallGrids() {
  let array = [];
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      cell.classList.add(`cell`);
      container.appendChild(cell);
      array.push(cell);
    }
  }
  hover();
}
