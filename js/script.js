{
    const welcome = () => {
        console.log("Hello World")
    }

    const toggleClass = () => {

        const image = document.querySelector(".js-image");
        const buttonName = document.querySelector(".buttonName");

        image.classList.toggle("js-noImage");
        buttonName.innerText = image.classList.contains("js-noImage") ? "Pokaż" : "Ukryj"
    }

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleClass);

        welcome();
    };
    init();
}    
