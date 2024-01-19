var nome = "daniela";
var idade = 27;
var altura = 1.65;
var estudando = true;

//typeof mostra o tipo da variavel
console.log(idade, typeof idade);

// ! Não utilizar o var

let nota = 10;
const media = 7;

console.log(nota);

// usando a raiz
const numero = 16;
const raizDoNumero = Math.sqrt(numero);
console.log("raiz quadrada de 16 =", raizDoNumero);

// usando numero aletorio Math.round

const n = 16;
const raizDoN = Math.round(n);
console.log("raiz quadrada de 16 =", raizDoN);

// usando a biblioteca readline-sync para pega informações do usuario
const prompt = require("readline-sync");

const idades = prompt.question("Qual eh sua idade?");

const idadeNumber = Number(idades); // para converte string em numero
console.log(idadeNumber, typeof idadeNumber);

//para converte numero para string NaN = not a number(não a numero)
console.log(String(10), typeof String(10));
console.clear();

for (let i = 0; i <= 9; i += 2) {
  console.log(i);
}
