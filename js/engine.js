let fed = document.getElementById("feed").value;
let box = document.getElementById("box");
const add = () => {
  let para = document.createElement("p");
  //   let para = document.getElementsByName("p");
  let text = document.createTextNode(fed);
  // console.log(text)
  para.appendChild(text);
  console.log(para)
    box.appendChild(para);
};

// const add = () => {
//   console.log(fed);
// };
