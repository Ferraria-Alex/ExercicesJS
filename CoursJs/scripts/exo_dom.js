// let h1 = document.querySelector("h1");
// /*
// let original = h1.innerText;
// h1.addEventListener("click", function(){
//     h1.innerText = h1.innerText == "--Emoji--" ? original : "--Emoji--";
// });
// */

// let liens = document.querySelectorAll("a");
// liens = Array.from(liens);
// let ajout = liens[0];
// let supprimer = liens[1];
// let toggle = liens[2];

// ajout.addEventListener("click",()=>{
//     h1.classList.add("chart");
// });
// supprimer.addEventListener("click",()=>{
//     h1.classList.remove("chart");
// });
// toggle.addEventListener("click",()=>{
//     h1.classList.toggle("chart");
// });

// function addImg(x,y){
//     let width = Math.floor(Math.random()*400)+100;
//     let height = Math.floor(Math.random()*width)+100;
//     let img = document.createElement("img");
//     img.style.position = "absolute";
//     img.src = "https://picsum.photos/" + width + "/" + height;
//     img.style.top = y-(height/2)+"px";
//     img.style.left = x-(width/2)+"px";
//     document.body.appendChild(img);
// };

//document.addEventListener("click",(key)=>{
//    addImg(key.pageX,key.pageY);
//})

// document.addEventListener("keyup",(key)=>{
//     if (key.key == "c"){
//         let imgs = document.querySelectorAll("img");
//         imgs = Array.from(imgs);
//         for(let img of imgs){
//             img.remove();
//         }
//     }
// })

// let bar = document.querySelector(".bar");

// document.addEventListener("scroll", ()=>{
//     console.log(document.body.scrollHeight);
//     console.log(window.scrollY);
//     let scrollMax = document.body.scrollHeight - window.innerHeight;
//     let currentScroll = window.scrollY-45;
//     bar.style.width = Math.floor((currentScroll / scrollMax) * 100) + "%";
// });

let textInput = document.querySelector("textarea");
let textChange = document.querySelector(".target1");
let button = document.querySelector("button");

textInput.addEventListener("keyup",()=>{
    textChange.innerText = textInput.value;
    if(textInput.value.length > 4){
        button.setAttribute("disabled","");
    } else {
        button.removeAttribute("disabled");
    }
});


