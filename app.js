const squaresColors = document.querySelectorAll(".box");
const inputColor = document.querySelector("input[type = color]");
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

squaresColors.forEach((item) =>{
    let colors = randColor();
    item.style.backgroundColor = colors;
    item.addEventListener("click", ()=>{
        document.body.style.backgroundColor = colors;
        removeSelectedColor();
        item.classList.add("selected-color");
        addColorToLocaleStorage(colors);
    });
});

function removeSelectedColor() {
    squaresColors.forEach((item) =>{
        item.classList.remove("selected-color");
    });
};

function randColor() {
    let color = "";
    for(let index = 0; index <= 5; index++){
        let randIndex = parseInt(Math.random() * hexColors.length);
        color += hexColors[randIndex];
    };
    return "#" + color;
};


window.onload = () =>{
    bodyBg(localStorage.getItem("bg-color") ?? "blue")
};

inputColor.addEventListener("change", function (){
    bodyBg(inputColor.value)
    addColorToLocaleStorage(inputColor.value);
});

function addColorToLocaleStorage (color){
    localStorage.setItem("bg-color", color)
};

function bodyBg(bodyColor) {
    document.body.style.backgroundColor = bodyColor;
};