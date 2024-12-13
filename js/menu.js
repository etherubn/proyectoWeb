let btn = document.getElementById("btn-menu")
let aside = document.querySelector(".menu-wrapper")
let asideBtn = document.querySelector(".menu__wrapper_btn")

btn.addEventListener("click",abrirAside)

asideBtn.addEventListener("click",cerrarAside)

document.addEventListener("click",(e)=>{
    if(aside.classList.contains("active") && e.target !==aside && e.target!==btn){
        cerrarAside()
    }
})



function abrirAside(){
    aside.classList.add("active")
}

function cerrarAside(){
    aside.classList.remove("active")
}