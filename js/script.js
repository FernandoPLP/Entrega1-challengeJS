const problema1 = document.getElementById("p1")

problema1.addEventListener("mouseenter", ()=>{
    problema1.textContent = "A falta de segurança durante o período noturno é uma preocupação comum em muitas cidades, especialmente quando se trata de sinalização inadequada e pouca iluminação. A falta de sincronização dos semáforos é um dos principais problemas que afeta o tráfego noturno, o que pode levar a congestionamentos desnecessários e aumentar o risco de acidentes. Além disso, a dificuldade para atravessar as ruas com segurança, especialmente em áreas com pouca iluminação, pode aumentar a vulnerabilidade dos pedestres a roubos e assaltos."
    problema1.style.backgroundColor = "#76d5f5"
    }
)

problema1.addEventListener("mouseleave", ()=>{
    problema1.textContent = "Problema1"
    problema1.style.backgroundColor = "#ffffff"
    }
)
const problema2 = document.getElementById("p2")

problema2.addEventListener("mouseenter", ()=>{
    problema2.textContent = "Infelizmente, o número de assaltos que ocorrem devido a essa má sinalização é alto em muitas regiões. Sem uma sinalização adequada, muitos pedestres ficam expostos a situações de risco, especialmente durante a noite, quando há pouca movimentação nas ruas. A falta de iluminação também pode contribuir para aumentar a vulnerabilidade dos pedestres a crimes."
    problema2.style.backgroundColor = "#76d5f5"
    }
)

problema2.addEventListener("mouseleave", ()=>{
    problema2.textContent = "Problema2"
    problema2.style.backgroundColor = "#ffffff"
    }
)
const problema3 = document.getElementById("p3")

problema3.addEventListener("mouseenter", ()=>{
    problema3.textContent = "Outro problema é a falta de segurança em situações de emergência. Sem um sistema de alerta eficiente, pode ser difícil para as autoridades locais responder rapidamente a acidentes ou outras situações de risco."
    problema3.style.backgroundColor = "#76d5f5"
    }
)

problema3.addEventListener("mouseleave", ()=>{
    problema3.textContent = "Problema3"
    problema3.style.backgroundColor = "#ffffff"
    }
)
const problema4 = document.getElementById("p4")

problema4.addEventListener("mouseenter", ()=>{
    problema4.textContent = "Em resumo, a falta de segurança e eficiência no tráfego noturno pode afetar a qualidade de vida das pessoas e aumentar o risco de acidentes e assaltos. É importante buscar soluções inovadoras e tecnológicas para resolver esses problemas e garantir a segurança e o bem-estar das comunidades locais."
    problema4.style.backgroundColor = "#76d5f5"
    }
)

problema4.addEventListener("mouseleave", ()=>{
    problema4.textContent = "Problema4"
    problema4.style.backgroundColor = "#ffffff"
    }
)

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

//Manipulando H1
const h1Element = document.getElementById("Titulo")
   
h1Element.addEventListener("mouseover", function(){ 
    h1Element.style.backgroundColor = "#ff0000" 
}) 
    
h1Element.addEventListener("mouseleave", function(){ 
    h1Element.style.backgroundColor = "#fff" 
})
