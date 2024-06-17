const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const btnEnviar = document.querySelector("#btnEnviar");

function limparCampo(){
    nome.value = "";
    email.value = "";
    mensagem.value = ""
}

btnEnviar.addEventListener("click",function(event){
    event.preventDefault();
    if ( (nome.value != "") && (email.value != "") && (mensagem.value != "") ){
        alert(`${nome.value}, Sua mensagem foi enviada com sucesso!`)
        alert(`Se for do seu interesse, faça login em nossa \npágina ${nome.value}, basta clicar em "Login" no nosso nav!`)
        limparCampo();
    }else{
        if (nome.value === ""){
            alert("Digite seu nome")
        }else if(email.value === ""){
            alert("Digite seu email")
        }else{
            alert("Digite uma mensagem")
        }
    }
})