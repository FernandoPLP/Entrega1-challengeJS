const problemas = document.getElementById("problemas")

problemas.addEventListener("mouseenter", ()=>{
    problemas.textContent = "A falta de segurança durante o período noturno é uma preocupação comum em muitas cidades, especialmente quando se trata de sinalização inadequada e pouca iluminação. A falta de sincronização dos semáforos é um dos principais problemas que afeta o tráfego noturno, o que pode levar a congestionamentos desnecessários e aumentar o risco de acidentes. Além disso, a dificuldade para atravessar as ruas com segurança, especialmente em áreas com pouca iluminação, pode aumentar a vulnerabilidade dos pedestres a roubos e assaltos."
    problemas.style.backgroundColor = "#76d5f5"
    }
)

problemas.addEventListener("mouseleave", ()=>{
    problemas.textContent = "Problemas"
    problemas.style.backgroundColor = "#ffffff"
    }
)