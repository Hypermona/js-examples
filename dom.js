const container = document.querySelectorAll(".container");
container[0].style.color = "white";
const c = document.querySelector("ul");
document.body.style.background = "black";

const itemList = ["apple", "mango", "orange"];

for (let item of itemList) {
  let element = document.createElement("li");
  element.innerText = item;
  c.appendChild(element);
}

document.myElementById = function (id) {
  return (function search(node) {
    if (node.id == id) {
      return node;
    }
    let value = null;
    for (let child of Object.values(node.children)) {
      if (child) {
        value = search(child);
        if (value) return value;
      }
    }
  })(this.body);
};
console.log(document.getElementById("item"));
console.log(document.myElementById("item"));
