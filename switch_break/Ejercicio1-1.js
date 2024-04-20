var luckyNumber = 8;

switch(luckyNumber) {
    case 1:
        console.log('Is 1');
    case 8:
        console.log('Is 8');
    default:
        console.log('Default');
}

//O almenos nos mostrará el resultado del caso que le hayamos asignado, hasta el final.
//En el ejercicio 1, el luckyNumber era el 1, por lo que mostraba "Is 1", "Is 8" y "Default".
//En este ejercicio el luckyNumber es el 8, por lo que solo muestra "Is 8" y "Default".