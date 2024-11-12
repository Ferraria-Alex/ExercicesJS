// Part 1
let lesTexts = document.getElementsByTagName("p");

console.log(lesTexts);

// Part 2

let textesTab = Array.from(lesTexts);

console.log(textesTab);

// Part 3

textesTab.map((element) =>{
    element.innerText = "I HACKED IT! YAY";
    element.style.color = "red";
});