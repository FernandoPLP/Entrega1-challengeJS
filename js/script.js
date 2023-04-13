//Manipulando H1
const h1Element = document.getElementById("Titulo")
   
h1Element.addEventListener("mouseover", function(){ 
    h1Element.style.backgroundColor = "#ff0000" 
}) 
    
h1Element.addEventListener("mouseleave", function(){ 
    h1Element.style.backgroundColor = "#fff" 
})

