const open = document.querySelector(".burger")
const nav = document.querySelector("nav")
const ul = document.querySelector("ul")

open.addEventListener("click", function(){
    nav.classList.toggle("nav-open")
    ul.classList.toggle("col-link")
    console.log("clicked")
})


let isOpen = false
open.addEventListener("click", function(){
    if(isOpen){
        open.innerHTML = "&#9776;"
    }
    else{
        open.innerHTML = "&#10005;"
        isOpen = true
    }
})