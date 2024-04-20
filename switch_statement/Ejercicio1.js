var luckyNumber = 8;

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

//El switch nos sirve para determinar qué nos devolverá el código dependiendo de los "casos"
//Es importante también nunca olvidarse de, luego de escribir un caso y el resultado que este nos va a retornar o mostrar, escribir un "break;" para que no haya ningún error.
//Lo mismo en la respuesta predeterminada que vayamos a establecer, ahí también es importante terminar con un "break;"