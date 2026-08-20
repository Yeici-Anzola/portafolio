const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateContainer();
});

nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateContainer();
});

function updateContainer() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    
    timer = setTimeout(() => {
        x = x - 45;
        updateContainer();
    }, 2000);
}

// Llamada inicial para comenzar la rotación automática
updateContainer(); 