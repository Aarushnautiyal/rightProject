// let fed = document.getElementById("feed").value;
// it doesn't work coz we grabbing the text after click before that input is an empty string
let box = document.getElementById("box");
const list = ["my list", "text"];
const add = (render) => {
  let fed = document.getElementById("feed").value;
  // it works now coz we grabbing the text after clickingso now input has a string
  // let para = document.createElement("p");
  //   let para = document.getElementsByName("p");
  let text = document.createTextNode(fed);
  // console.log(text)
  if (fed.length > 0) {
    // para.appendChild(text);
    // console.log(para);
    // box.appendChild(para);
    box.innerHTML += `<p>${fed}</p>`;
    list.push(fed);
    render();
    fed = "";
  } else {
    alert("please try to feed something before entering");
  }
};
// const render = () => {
//   for (let i = 0; i < list.length; i++) {
//     let text = "";
//     text += `<p>${list[i]}</p>`;
//   }
//   box.innerHTML += text;
// };
// const add = () => {
//   console.log(fed);
// };

// if (fed.length > 0) {
//   para.appendChild(text);
//   console.log(para);
//   box.appendChild(para);
// } else {
//   alert("please try to feed something before entering");
// }
