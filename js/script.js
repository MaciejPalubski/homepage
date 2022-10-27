console.log("Hello World")






let button = document.querySelector(".button");
let image = document.querySelector(".js-image");
let buttonName = document.querySelector(".buttonName");
let title = document.querySelector(".title");

button.addEventListener("click", () => {
    image.classList.toggle("js-noImage");
    buttonName.innerText = image.classList.contains("js-noImage") ? "Pokaż" : "Ukryj"

});

