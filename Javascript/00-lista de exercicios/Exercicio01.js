/* 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade caucule
e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3)/3

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.
*/

const nota1 = 4;
const nota2 = 5;
const nota3 = 4;

let media = (nota1 + nota2 + nota3) / 3;
let status = "";
if (media < 5) {
  let status = "Reprovado";
  console.log(
    `Sua média é: ${media.toFixed(2)} e sua classificação é : ${status}`
  );
} else if (media >= 5 && media <= 7) {
  let status = "Recuperação";
  console.log(
    `Sua média é: ${media.toFixed(2)} e sua classificação é : ${status}`
  );
} else {
  let status = "Passou de semestre";
  console.log(
    `Sua média é: ${media.toFixed(2)} e sua classificação é : ${status}`
  );
}
