import { plus } from "./plus.js";
import "./styles.css";
import tiger from "./tiger.png";

// console.log(plus(1, 2));

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${tiger}" />`;
});