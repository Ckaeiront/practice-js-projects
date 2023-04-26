const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnColor = document.querySelector('.btn-hero');
const colorText = document.querySelector('.color');

const randomHex = function () {
    var hexValue = '#';
    for (let i = 0; i <= 5; i++) {
        hexValue += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexValue;
}

btnColor.addEventListener('click', function (e) {
    const colorBackground = randomHex();
    document.body.style.backgroundColor = colorBackground;
    colorText.textContent = colorBackground;
});
