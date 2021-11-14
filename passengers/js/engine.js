let count = document.getElementById("count");
let sum = document.getElementById("sum");
let log = document.getElementById("log");
let counter = 0;
let total = 0;

const add = () => {
  counter = counter + 1;
  total = counter * 5;
  count.innerText = counter;
  sum.innerText = total;
  let tag = document.createElement("p");
  tag.id = "logger";
  let text = document.createTextNode("Passenger came in");
  tag.appendChild(text);
  log.appendChild(tag);
};
const remove = () => {
  let tag = document.createElement("p");
  tag.id = "logger";
  let text = document.createTextNode("Passenger left");
  if (counter > 0) {
    counter = counter - 1;
    console.log(counter);
    total = total - 5;
    tag.appendChild(text);
  } else {
    let text = document.createTextNode("Bus Empty");
    tag.appendChild(text);
  }
  count.innerText = counter;
  sum.innerText = total;
  log.appendChild(tag);
};

console.log(count);
