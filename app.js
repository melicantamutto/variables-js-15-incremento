console.log('Incremento')

alert('Incremento')

const numero = prompt('Ingresa un número de partida');
const incremento = prompt('Ingresa la cantidad a incrementar')
const resultado1 = Number(numero) + Number(incremento);
const resultado2 = Number(resultado1) + Number(incremento);
const resultado3 = Number(resultado2) + Number(incremento);
const resultado4 = Number(resultado3) + Number(incremento);
const resultado5 = Number(resultado4) + Number(incremento);

alert(`Tu valor inicial fue ${numero}`);
alert (`Incremento 1: ${resultado1}`);
alert (`Incremento 2: ${resultado2}`);
alert (`Incremento 3: ${resultado3}`);
alert (`Incremento 4: ${resultado4}`);
alert (`Incremento 5: ${resultado5}`);
