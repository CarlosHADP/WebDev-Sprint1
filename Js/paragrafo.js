const paragrafo = document.querySelector("#paragrafo");
const btnEditar = document.querySelector("#btnEditar");
const btnNegrito = document.querySelector("#btnNegrito");

btnEditar.addEventListener("click", function(){
    edit = prompt("Escreva o texto que deseje para escrever no paragrafo");
    paragrafo.innerHTML = edit;
})

btnNegrito.addEventListener("click", function(){
    if (paragrafo.style.fontWeight != 'bold'){
        paragrafo.style.fontWeight = 'bold';
        paragrafo.style.color = 'black';
    }else{
        paragrafo.style.fontWeight = "400";
        paragrafo.style.color = 'white';
    }
})