var luckyNumber = 1;

switch(luckyNumber) {
    case 1:
        console.log('Is 1');
    case 8:
        console.log('Is 8');
    default:
        console.log('Default');
}

//En este ejercicio se logra observar la importancia que tiene el "break;" al final de cada caso.
//Ya que, en caso de no usarlo, el resultado que nos mostrará al final son todas las opciones que existen dentro de nuestro switch.