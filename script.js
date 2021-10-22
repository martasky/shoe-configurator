document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("shoe.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  init();
}

function init() {
  const sole = document.querySelector("#sole");
  sole.style.cursor = "pointer";
  const fabricLeft = document.querySelector("#fabric-left");
  fabricLeft.style.cursor = "pointer";
  const fabricMiddle = document.querySelector("#fabric-middle");
  fabricMiddle.style.cursor = "pointer";
  const fabricRight = document.querySelector("#fabric-right");
  fabricRight.style.cursor = "pointer";
  const tongue = document.querySelector("#tongue");
  tongue.style.cursor = "pointer";
  const front = document.querySelector("#front");
  front.style.cursor = "pointer";
  const toe = document.querySelector("#toe");
  toe.style.cursor = "pointer";
  const sideLeft = document.querySelector("#side-left");
  sideLeft.style.cursor = "pointer";
  const back = document.querySelector("#back");
  back.style.cursor = "pointer";
  const sideRight = document.querySelector("#side-right");
  sideRight.style.cursor = "pointer";
  const heel = document.querySelector("#heel");
  heel.style.cursor = "pointer";
  const top = document.querySelector("#top");
  top.style.cursor = "pointer";

  const userChoice = document.querySelector("#colorPicker");
  userChoice.addEventListener("input", displayColor);

  /*   setColor(crown, "hsl(350, 100%, 80%)");
  setColor(visor, "hsl(350, 100%, 30%)"); */

  setColor(sole, "white");
  setColor(fabricLeft, "white");
  setColor(fabricMiddle, "white");
  setColor(fabricRight, "white");
  setColor(tongue.parentElement, "white");
  setColor(front, "white");
  setColor(toe, "white");
  setColor(sideLeft, "white");
  setColor(back, "white");
  setColor(sideRight, "white");
  setColor(heel, "white");
  setColor(top, "white");

  let currentColor = "";

  /*   document.querySelectorAll("g").forEach((g) => {
    g.addEventListener("click", (event) => {
      setColor(event.target, currentColor);
      console.log(event.target);
      if (g.id === "tongue") {
        setColor(event.target.parentElement, currentColor);
      }
    });
  }); */

  sole.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  fabricLeft.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  fabricMiddle.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  fabricRight.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  tongue.addEventListener("click", (event) => {
    setColor(event.target.parentElement, currentColor);
    console.log(event.target);
  });

  toe.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  sideLeft.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  back.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  sideRight.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  heel.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });
  top.addEventListener("click", (event) => {
    setColor(event.target.parentElement, currentColor);
    console.log(event.target);
  });
  front.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });

  document.querySelectorAll(".color-selector").forEach((element, i) => {
    console.log("i", i);

    element.addEventListener("click", (event) => {
      currentColor = event.target.style.backgroundColor;

      console.log("this is current color", currentColor);
    });
  });

  document.querySelectorAll("g").forEach((g) => {
    g.addEventListener("mouseover", createStroke);
    g.addEventListener("mouseout", removeStroke);
    console.log(g);
  });

  function displayColor(e) {
    currentColor = e.target.value;
  }
}

function createStroke(e) {
  e.target.parentElement.classList.add("stroke");
}
function removeStroke(e) {
  e.target.parentElement.classList.remove("stroke");
}
function setColor(element, colorString) {
  console.log(element.tagName);
  element.style.fill = colorString;
}
