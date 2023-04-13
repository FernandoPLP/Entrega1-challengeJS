//Validação de usuário

let usuario = "admin"
let senha = "1234"
let usu= prompt("digite seu usuario: ")
let sen= prompt("digite sua senha: ")
if(usuario ==usu && senha==sen){
    console.log("Bem vindo, login efetuado com sucesso")
}

else{
    console.log("Falha na autenticação! ")
    window.stop()
}