
//prenom;
//alert('Ce message ne s\'affichera pas');
// let target = document.getElementById("target");
// try{
//     prenom
//     alert('Bonjour');  
// }catch(err){
//   console.log(err);
//     target.innerText += `Erreur Détectée ALERTE STOPPEZ TOUT: 
//         -----------
//         Le Nom de l'erreur 
//         ${err.name}
//         -----------
//         Le Message de l'erreur  :
//         ${err.message}
//         ----------
//         L'emplacement de l'erreur:
//         ${err.stack}`;
// }finally{
//     target.innerText += `
//     Ce message s'affiche correctement
//     `;
// }
// target.innerText += `
// Ce message s'affiche correctement aussi
// `;
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable

async function contactApi(){
    try{

    //Data va récup Toutes les données de l'api
    const response = await fetch('https://tyradex.vercel.app/api/v1/gen/5',{type:'CORS'});

    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed = await response.json();
    //console.log(dataTransformed);
    let pokemons = await dataTransformed;
    console.log(pokemons);

    const apiDiv = document.querySelector('.apiContact');

    let counter = 0;
    for(let i = 0; i < pokemons.length; i++){
        apiDiv.innerHTML += `<div class="card"> 
        <img width="200px" height="200px" src="${pokemons[i].sprites.regular}" alt="${pokemons[i].name.en}">
        <p class="center">${pokemons[i].name.en}</p> 
        </div>`;
        counter++
    }
    apiDiv.innerHTML += `<p>${counter}</p>`;
    }catch(err){
        const apiDiv = document.querySelector('.apiContact');
        apiDiv.innerHTML += `<p>${err}</p>`;
        return err;
    }
};

contactApi();