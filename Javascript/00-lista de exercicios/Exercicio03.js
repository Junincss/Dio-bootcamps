/*Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e escolha da condição de pagamento.
Utilize os códigoss da tabela a seguor para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.


Código - Condição de pagamento:
1 - À vista débito, recebe 10% de desconto
2 - À vista no Dinheiro ou Pix, recebe 15% de desconto
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoEtiqueta = 150;

const formaDePagamento = 2;

let precofinal = undefined;

switch (formaDePagamento) {
  case 1:
    precofinal = precoEtiqueta - precoEtiqueta * 0.1;
    console.log(
      `Parabéns!!!
      Você optou pela ${formaDePagamento}º forma de pagamento, e recebeu 10% de desconto
      sua compra sairá no total de: ${precofinal.toFixed(2)}R$`
    );
    break;

  case 2:
    precofinal = precoEtiqueta - precoEtiqueta * 0.15;
    console.log(
      `Parabéns!!!
      Você optou pela ${formaDePagamento}º forma de pagamento e recebeu 15% de desconto
      sua compra sairá no total de: ${precofinal.toFixed(2)}R$`
    );
    break;

  case 3:
    precofinal = precoEtiqueta;
    console.log(
      `Parabéns!!!
      Você optou pela ${formaDePagamento}º forma de pagamento e poderá parcelar sua compra em até 2x,  o valor final é no total de: ${precofinal.toFixed(
        2
      )}R$`
    );
    break;

  case 4:
    precofinal = precoEtiqueta + precoEtiqueta * 0.1;
    console.log(
      `Parabéns!!!
      Você optou pela ${formaDePagamento}º forma de pagamento e poderá parcelar sua compra em até 10x, o valor final é no total de: ${precofinal.toFixed(
        2
      )}R$`
    );
    break;

  default:
    console.log("Opção inválida.");
    break;
}
