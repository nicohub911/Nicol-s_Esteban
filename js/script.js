const welcomeTxt = document.getElementById("welcomeText");
const myNavList = document.getElementById("navList");

document.addEventListener("DOMContentLoaded",()=>{
    
    
    maquina("< Welcome to my portfolio >", welcomeTxt);
});

function maquina(texto = "", contenedor) {        
    let caracteres = texto.split("");
    let contador = 0;
    contenedor.innerHTML = "";
    let tiempo = setInterval(()=>{
        contenedor.innerHTML += caracteres[contador];
        contador ++;
        if(contador === caracteres.length){
            clearInterval(tiempo);
        }
    }, 100);
    
}



