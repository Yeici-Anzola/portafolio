const btnReir = document.querySelector(".btn");
const txDeslizar = document.querySelector(".broma");

var URL = "https://v2.jokeapi.dev/joke/Any?lang=es&type=single";

btnReir.addEventListener("click", getMethod);

async function getMethod() {
    txDeslizar.classList.remove("deslizar");
    const data = await fetch(URL).then((e) => e.json());
    if(data){
        console.log(data);
        txDeslizar.innerHTML = data.joke;
        txDeslizar.classList.add("deslizar");
    }
}
