const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnColor = document.querySelector('.btn-hero');
const backgroundColor = document.querySelector('.color');

btnColor.addEventListener('click', () => {
    const colored = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = colored;
    backgroundColor.textContent = colored;
});
