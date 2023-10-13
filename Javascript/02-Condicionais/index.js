/* Estruturas condicionais em javascript
condicionais são estruturas de decisão, e  que  utilizam em suas estruturas
variáveis do tipo boolean, variáveis do tipo boolean são variáveis lógicas que representa, verdadeiro ou falso
uma variável do tipo bolean só pode conter 1 desses dois valores
veja o exemplo abaixo:

*/

const varboolean1 = true; // variável booleana com valor verdadeiro

const varboolean2 = false; // variavel booleana com valor falso

console.log(varboolean1);

console.log(varboolean2);

/* e com isso podemos realizar algumas operações com alguns outros operadores que indicam verdadeiro ou falso, por exemplo:
10 > 5 == true , 10 < 5 == false
> maior que
< menor que
== igual a 
>= maior ou igual a 
<= menor ou igual a 
% módulo da divisão*/

/* exercicio 
Faça um programa para calcular o valor de uma viagem.
voce terá 5 variáveis. Sendo elas:
1 - Preço do etanol
2 - Preço da gasolina
3 - O tipo de combustivel que está no carro;
4 - Gasto médio por km
5 - distancia em km da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLt = 10;
const distancia = 100;
const abastecido = "Gasolina";
let consumoF = 0;

if (abastecido === "Etanol") {
  consumoF = (distancia / kmPorLt) * precoEtanol;
} else {
  consumoF = (distancia / kmPorLt) * precoGasolina;
}

console.log(
  `O gasto final da sua viagem usando ${abastecido} é/será de: ${consumoF.toFixed(
    2
  )}`
);
