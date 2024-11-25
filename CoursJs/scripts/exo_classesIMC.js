class Imc {
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.imc = this.weight/this.height**2
    }
    displayImc(){
        console.log(`${this.name} (${this.weight}kg, ${this.height} M) a un IMC de: ${this.imc.toFixed(2)}`);
    }
}

// Programme Principale

let list = [
    new Imc("Sébastian Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55),
];

// Boucle

list.forEach((item)=>{
    item.displayImc();
});