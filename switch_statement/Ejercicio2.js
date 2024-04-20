var luckyNumber = 7;

switch(luckyNumber) {
    case 1: 
        console.log('Is 1');
        break;
    case 8:
        console.log('Is 8');
        break
    default:
        console.log('Default');
        break;
}

if(luckyNumber == 1) {
    console.log('Is 1');
}
else if(luckyNumber == 8) {
    console.log('Is 8');
}
else {
    console.log('Default');
}

//Aunque pareciera que if, else if y else fuera más rápido y corto, el switch está más estructurado.
//Por lo que es más fácil trabajar con un número determinado de casos que tengamos.
//Mientras que para trabajar con if, hay que escribir un else if, hasta que no nos queden más posibilidades y luego el else final.
