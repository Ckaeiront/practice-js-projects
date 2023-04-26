const buttons = document.querySelectorAll(".btn");
const numValue = document.querySelector("#value");
let n = 0;

buttons.forEach((el) => {
  console.log(el);
  el.addEventListener("click", (e) => {
    let elemento = e.target;
    let color;

    if (elemento.classList.contains("increase")) n += 1;
    if (elemento.classList.contains("reset")) n = 0;
    if (elemento.classList.contains("decrease")) n -= 1;

    if (n < 0) color = "red";
    if (n == 0) color = "#222";
    if (n > 0) color = "green";

    numValue.textContent = n;
    numValue.style.color = color;
  });
});
