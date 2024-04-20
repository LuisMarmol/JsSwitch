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

//En este caso nos suelta 'Default' debido a que no existe un caso ligado al número 7.
//Por lo que la única respuesta que nos puede dar, es la que nosotros hayamos definido en el caso 'default'
//(Aunque default no es un caso, sino una respuesta predeterminada para este tipo de situaciones).