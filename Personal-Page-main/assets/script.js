// script.js
window.addEventListener("resize", function () {
    var leftSection = document.querySelector(".left-section");
    var fontSizeInPixels = parseFloat(getComputedStyle(document.body).fontSize);
    if (window.innerWidth / fontSizeInPixels < 30) {
        leftSection.innerHTML = "<strong>Haichang</strong>";
    } else if (window.innerWidth / fontSizeInPixels < 34) {
        leftSection.innerHTML = "<strong>Haichang Li</strong>";
    } else {
        leftSection.innerHTML = "<strong>Haichang Li 李海畅</strong>";
    }
});
