const open = document.querySelector(".burger")
const nav = document.querySelector("nav")
const ul = document.querySelector("ul")

open.addEventListener("click", function(){
    nav.classList.toggle("nav-open")
    ul.classList.toggle("col-link")
    console.log("clicked")
})