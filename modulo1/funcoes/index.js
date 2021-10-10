// Exercícios de interpretação de código
// 1. Será impresso 10 e 50. 

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) // nada será imprimido sem o console.log
// console.log(minhaFuncao(10)) // nada será imprimido sem o console.log


// 2. A) É uma função assim como a Declaração de função, a diferença é na escrita do código, continuam tento 
// a msm funcionabilidade que é de executar uma tarefa.
// Expressões de função É uma outra forma de denominar expressões de funções,
// por elas não terem um nome diretamente associado à função.
// B) Caso o usuário escreva uma palavra que não seja "cenoura", terá "false" como resposta, pois, 
// o includes está procurando a palavra "cenoura".

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)



// Exercícios de escrita de código
1.

function montarFraseFinal(nome, idade, cidade, profissão) {
const fraseFinal = `Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissão}.`

return fraseFinal
}

const frasePessoal = montarFraseFinal("Renan", 20, "Ceará", "Estudante na Labenu")
console.log(frasePessoal)




// 2. A)
function doisNumeros(num1, num2) {
const soma = num1 + num2
console.log(soma)

return soma

}

doisNumeros(4,8)


// B)
function idNumMaior(num1, num2) {
    ehMaior = num1 > num2
    return ehMaior
}
    const imprimirMaior = idNumMaior(4, 8)
    console.log(imprimirMaior)

// C)

function idNumMaior(num1) {
    ehPar = num1 % 2 === 0
    return ehPar
    
}

    const imprimirPar = idNumMaior(8)
    console.log(imprimirMaior)




// D)
function imprimirMensagemMaiscula(mensagem) {
    console.log("Tamanho da mensagem:", mensagem.lenght)
    console.log(mensagem.toUpperCase())
}

    imprimirMensagemMaiscula("Mensagem toda maiscula")



3.
const numero1 = Number(prompt("Informe o primeiro número:"))
const numero2 = Number(prompt("Informe o segundo número:"))
function somar (numero1, numero2){
    const soma = numero1 + numero2
    return soma
}

function subtracao (numero1, numero2){
    const diferenca = numero1 - numero2
    return diferenca
}

function multiplicar (numero1, numero2){
    const multiplicacao = numero1 * numero2
    return multiplicacao
}


function dividir (numero1, numero2){
    const divisao = numero1 / numero2
    return divisao
}

console.log("Os números inseridos: 30 e 3")
console.log("Soma:", somar(numero1, numero2))
console.log("Diferença:", subtracao(numero1, numero2))
console.log("Multiplicação:", multiplicar(numero1, numero2))
console.log("Divisão:", dividir(numero1, numero2))