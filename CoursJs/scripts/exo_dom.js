let h1 = document.querySelector("h1");
/*
let original = h1.innerText;
h1.addEventListener("click", function(){
    h1.innerText = h1.innerText == "--Emoji--" ? original : "--Emoji--";
});
*/

let liens = document.querySelectorAll("a");
liens = Array.from(liens);
let ajout = liens[0];
let supprimer = liens[1];
let toggle = liens[2];

ajout.addEventListener("click",()=>{
    h1.classList.add("chart");
});
supprimer.addEventListener("click",()=>{
    h1.classList.remove("chart");
});
toggle.addEventListener("click",()=>{
    h1.classList.toggle("chart");
});


