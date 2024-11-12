function averageScore(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    result = Math.floor(result/arr.length);
    return result
}

let score = averageScore([0,NaN,14]);

if (score == 20){
    alert("Trés Bien! Tu es PRO");
}else if(score < 20 && score > 14){
    alert("Tu t'en sort bien en vraie!");
} else if(score < 15 && score > 10){
    alert("eeeeh... La moyenne c'est cool!");
} else if(score < 10 && score > 0){
    alert("Tu dois etudier plus!!! D ou F");
} else if (score == 0){
    alert("Comment tu a fait ça???");
} else {
    alert("il y a eu une error surement! Peut etre un NaN dans le système");
}
