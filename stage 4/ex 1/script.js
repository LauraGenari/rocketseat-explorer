const numberOne = Number(prompt('Insira um número: '));
const numberOneIsEven = numberOne % 2 === 0;
alert(`${numberOneIsEven ? 'O primeiro número é par' : 'O primeiro número é impar'}`);

const numberTwo = Number(prompt('Insira outro número: '));
const numberTwoIsEven = numberTwo % 2 === 0;
alert(`${numberTwoIsEven ? 'O segundo número é par' : 'O segundo número é impar'}`);

const isEqual = numberOne === numberTwo;
alert(`${isEqual ? 'Os números inseridos são iguais' : 'Os números inseridos são diferentes'}`);

const soma = numberOne + numberTwo;
const subs = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const resto = numberOne % numberTwo;

alert(`Soma: ${soma} \n
Subtração: ${subs} \n
Multiplicação: ${multi} \n
Divisão: ${div} \n
Resto: ${resto} \n`);