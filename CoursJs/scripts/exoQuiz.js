//! EXO 5.1 : Quizz Function
//TODO : Pourquoi ca beug ?
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
// console.log(wtf); 

/* 
La function est correcte mais tu ne peut pas appeler une variable en dehors du bloc ou elle à ete créer!
Ta function fait deja ce que tu veux faire en bas.
Essaye de nommer tes variables et functions avec de noms plus descriptifs comme num ou numero, etc.
*/

// Correction
function log9(){
    let num = 9;
    console.log(num);
}
log9();

//! EXO 5.1.2 : Quizz Function
//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
let something = 44;
function functionBugParent() {
    let something = 9;
    console.log(something);
    console.log(lesNews);

    //function functionBugEnfant() {
    //    let lesNews = `il est 99h67`;
    //}
};

/* 
Si tu a deux variable une sur ton fichier et une aure sur ton bloc de function je te conseille a ne pas mettre le meme nom pour une question de lisabilité.
Toujours renommer pour noms plus descriptives.
Aussi n'oublie d'utiliser return si tu veux un numero comme reponse d'une function et n'oublie d'appeler la function
*/

// Correction
let num1 = 44;
function log9AndNews() {
    let num = 9;
    console.log(num);
    console.log(getLesNews());

    function getLesNews() {
        let lesNews = `il est 99h67`;
        return lesNews;
    };
};
log9AndNews();