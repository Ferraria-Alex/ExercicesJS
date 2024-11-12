let nameUser = "Personne";
let email = "iamapersonnumero1@gmail.com";
let pizzaName  = "Pepperoni Pizza";
let pizzaIngredients = ['Pepperoni', 'Cheese', 'Tomato sauce', 'Basil'];
let extras = ['Extra Pepperoni', 'Extra Cheese'];
let boughtDate = "12/12/2016";
let pizzaPrice = 9.99;
let extrasPrice = {'pepperoni': 5.99, 'cheese': 1.99};
let arrivalTimeMin = 26;

let sumUpOrderPhrase = `Merci ${nameUser} d'avoir commandé chez "La Pizzaria Raffinata"
Votre order d'une ${pizzaName} qui contien ${pizzaIngredients[0]}, ${pizzaIngredients[1]}, ${pizzaIngredients[2]}, ${pizzaIngredients[3]} et mise en place et va etre termine dans ${arrivalTimeMin} minutes
Extras: ${extras[0]}, ${extras[0]} |
Prix Sans Extras: ${pizzaPrice} |
Prix Extras: ${extras[0]}:${extrasPrice.pepperoni}, ${extras[1]}:${extrasPrice.cheese} |
Prix Total: ${pizzaPrice + extrasPrice.pepperoni + extrasPrice.cheese} |
Jour d'achat: ${boughtDate} |

Qu'est-ce q'une pizza a dit à une autre pizza qui lui demandait des conseils?

"Suis ta pate et tout ira bien !"
`;

console.log(sumUpOrderPhrase);

let target = document.getElementById("target")
let divPizza = document.createElement("div");
divPizza.textContent = sumUpOrderPhrase;
target.append(divPizza);

