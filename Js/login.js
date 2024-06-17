const btnDica = document.querySelector("#btnDica");
const btnEnviar = document.querySelector("#btnEnviar");
const emailLogin = document.querySelector("#email");
const senhaLogin = document.querySelector("#senha");

function limparCampo(){
    emailLogin.value = "";
    senhaLogin.value = "";
}
btnDica.addEventListener("click", function(){
    alert("Email: challenge@fiap.com \nSenha: 1234");
})

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    if ( (emailLogin.value === "challenge@fiap.com") && (senhaLogin.value === "1234") ){
        limparCampo();
        window.location.href = "/Html e Css/index.html";

    }else{
        alert("Este user nao existe");
    }
});