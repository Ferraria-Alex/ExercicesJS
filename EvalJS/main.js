// Exercice 1

let str = "Hello World";
let num = 1432;
let bool = true;
let arr = [1,"String Because it's js",2,false,6];
let obj = {animal: "cat", 0:1};
let notDefined;
let typeNull = null;

console.log("Exercice 1");
console.log(str,"|", num,"|", bool,"|", arr,"|", obj,"|", notDefined,"|", typeNull);

//Exercice 2

function celsiusToFahrenheit(numCelsius){
  return numCelsius * (9/5) + 32 + "°F"
}

console.log("Exercice 2");
console.log(celsiusToFahrenheit(20));

//Exercice 3

function evenOrOdd(num){
  if(num % 2 == 0){
    console.log(`${num} est pair`); 
  } else {
    console.log(`${num} est impair`);
  }
}

console.log("Exercice 3");
evenOrOdd(22);
evenOrOdd(55);

//Exercice 4

function doubleLoop(){
  for(let i = 1; i < 11; i++){
    console.log(i);
  }
  for(let i = 10; i > 0; i--){
    console.log(i);
  }
}

console.log("Exercice 4");
doubleLoop();

//Exercice 5

function add(num1,num2){
  return num1 + num2;
}

console.log("Exercice 5");
console.log(add(22,33));

//Exercice 6

function verifyWord(string, word){
  if(string.includes(word)){
    return true;
  }
  return false;
}
let word = "World"
console.log("Exercice 6");
console.log(`The string > ${str} < contains the word > ${word} < ?`);
console.log(verifyWord(str, word));

//Exercise 7

let names = ["Alexandre", "Appoline", "Maxime", "Romaric", "Jordan", "Kevin", "Sophie", "Marjorie", "Vincent", "Yassine", "Lucile", "Florian"];
function goThroughArr(array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

console.log("Exercice 7");
goThroughArr(names);

// Exercise 8

let person = {name: "Alex", age: 22, ville: "Cugnaux"};

function goThroughObj(obj){
  for(let property in obj){
    console.log(property,":", obj[property]);
  }
}

console.log("Exercice 8");
goThroughObj(person);

// Exercise 9
document.body.innerText = "Exercise 9 : Hello World";

// Exercise 10
let button = document.createElement("button");
button.innerText = "CLICK ME!";
button.style.marginLeft = "25px";
button.addEventListener("click",key=>{alert("Hello World")});
document.body.append(button);

//Exercise 11

let h1 = document.createElement("h1");
h1.innerText = "Blague";
h1.style.textAlign = "center"
button.after(h1);

let p = document.createElement("p");
p.style.textAlign = "center";
h1.after(p);

async function getChuckFact() {
  const url = "https://api.chucknorris.io/jokes/random";
  try{
    const res = await fetch(url);
    if(!res.ok){
      throw new Error(`Response status: ${res.status}`);
    }
    const json = await res.json();
    return json.value;
  } catch(error) {
    console.error(error.message);
  }
}

p.innerText = await getChuckFact();

// Exercise 12

let body = document.querySelector("body");
let buttonChartreuse = document.createElement("button");
buttonChartreuse.innerText = "Chartreuse Mode";
buttonChartreuse.addEventListener("click",()=>{
  body.style.backgroundColor = "#C3F812";
});
p.after(buttonChartreuse);