// DOM MANIPULATION //DOCUMENT.OBJECT.MODEL

// 1.) .getElementById
// const heading = document.getElementById("heading");
// console.log(heading);

// 2.) .getElementsByTagName
// const heading = document.getElementsByTageName("heading");
// console.log("h1");

// 3.) .getElementsByclassName
// const heading = document.getElementsByClassName("heading");
// console.log(heading);

//4.)  .querySelector //returns single object with first html element
// const heading = document.querySelector("#heading");
// // # is use only for idName
// console.log(heading);
// const heading1 = document.querySelector(".head");
// // . is use only for className
// console.log(head);

// // 5.) .querySelectorAll // Returns--collections
// const heading2 = document.querySelectorAll(".head");
// console.log(head);

// Tranverse.DOM

// 1.).parentsNode
// const heading = document.querySelector(".head");
// const neading = heading.parentNamed;
// console.log(parent);

// 2.)chidNodes
// const parent = document.querySelector(".parent");
// console.log(parent.childNodes);

// 3.).nextElementSibling
// const heading = document.querySelector(".heading");
// console.log(heading.nextElementSibling);

// 4.).previousElementSibling
// const subHeading = document.querySelector("h3");
// console.log(subHeading.previousElementSibling);

// MANIPULATION
// const heading = document.querySelector(".heading");
// heading.innerHTML = "website is awesome!";
// heading.style.color = "red";
// heading.style.fontSize = "100px";
// heading.classList.add("title");
// heading.classList.remove("heading");

//create Elements
// const heading = document.createElement("h1");
// heading.innerHTML = "Website is awesome!";
// heading.classList.add("title");
// const parent = document.querySelector(".parent");
// parent.appendChild(heading);
// console.log(heading);

// const subHeading = document.createElement("h3");
// subHeading.innerHTML = "weather is cool!";
// heading.insertAdjacentElement("afterbegin", subHeading);
// console.log(subHeading);

// DOM event
// const button = document.querySelector("#btn");
// const heading = document.querySelector("#heading");
// button.addEventListener("click", function (event) {
//   heading.style.color = "purple";
//   heading.style.fontSize = "80px";
//   console.log("button click", event);
// });

//

// BULB PROJECT
const bulbSwitch = document.querySelector("#btn_on");
const bulb = document.querySelector("#bulbOff");

bulbSwitch.addEventListener("click", function () {
  console.log(bulb.src);
  if (bulb.src.match("off")) {
    bulb.src = "bulb-on.png";
    bulbSwitch.innerHTML = "TURN-OFF";
  } else {
    bulb.src = "bulb-off.png";
    bulbSwitch.innerHTML = "TURN-ON";
  }
});
