const body = document.body;

const divs = document.getElementsByClassName("block");
let events = [];
function onclick(e) {
  events.push(e);
  e.stopPropagation();
  setTimeout(() => {
    this.style.backgroundColor = "red";
  }, 1000 * events.length);
}
// const setActiveClasses = (function () {
//   let events = [];

//   return {
//     handler: function (e) {
//       events.push(e);
//       setTimeout(() => {
//         this.style.backgroundColor = "red";
//       }, 500 * events.length);
//     },
//   };
// })();

body.addEventListener("click", onclick);

for (let ele of divs) {
  ele.addEventListener("click", onclick);
}
