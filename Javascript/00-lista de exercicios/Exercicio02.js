/*
O IMC é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta
Formula do IMC:
IMC = peso / (altura * altura)
Elabore um algoritimo que dado o peso e altura do individo mostre sua condicao de acordo com a tabela abaixo.
IMC em adultos Condição:
- Abaixo de 18.5 abaixo do peso; 
- entre 18.5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave; 
*/

const peso = 80.5;
const altura = 1.71;
// const imc = peso / altura ** 2;
const imc = peso / Math.pow(altura, 2);
let mensagem = "";

if (imc < 18.5) {
  mensagem = "abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
  mensagem = "peso normal";
} else if (imc >= 25 && imc < 30) {
  mensagem = "acima do peso";
} else if (imc >= 30 && imc < 40) {
  mensagem = "Obeso";
} else {
  mensagem = "Obesidade Grave";
}

console.log(`Seu IMC é : ${imc.toFixed(2)} e você está : ${mensagem}`);
