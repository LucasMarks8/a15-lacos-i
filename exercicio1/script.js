// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. 
// “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. 
// Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let food = prompt("Vodê deseja comer coxinha? S ou N").toUpperCase()
let conta = 0

while (food === "S") {
    conta += 2.50;
    food = prompt("Vodê deseja comer mais coxinhas? S ou N").toUpperCase();
}

console.log(`O valor total da sua compra é: ${conta} reais`)