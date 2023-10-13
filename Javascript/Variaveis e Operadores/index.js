// -----Aula 01 Javascript ----
// Variáveis, como declarar e quais as diferenças..
// em JavaScript podemos declarar variáveis de 3 formas diferentes, sendo var, let e const,
// as tres variáveis tem suas respectivas particularidades que vamos ver a seguir.
// let é um tipo de variável que pode ter o seu valor trocado durante o código,  ela pode ter o seu valor alterado nas linhas abaixo sem comprometer a estrutura do código.
// const é um tipo de variável-constante, onde não é possível declara-la duas vezes em um documento, ou seja, seu conteúdo é inalterado.
// var é uma forma antiga de declarar-mos variáveis, ela tem por característa um valor global tratando-se de escopo. por convenção ela não é tão utilizada atualmente.
// 1º desafio Javascript: Faça um programa para calcular o valor de uma viagem.
//voce terá 3 variáveis. Sendo elas:
//1 - Preço do combustível
//2 - Gasto médio de combustível do carro por km
//3 - Distancia em KM da viagem
//imprima no console o valor que será gasto para realizar esta viagem.

const precoCombustível = 5.99;
const kmPorLitro = 8;
const distanciaKm = 300;

let precoFinalViagem = (distanciaKm / kmPorLitro) * precoCombustível;
console.log(
  `O meu gasto com combustível é de : ${precoFinalViagem.toFixed(2)} R$`
);

