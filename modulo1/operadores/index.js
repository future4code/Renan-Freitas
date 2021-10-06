// Exercícios de interpretação de código
// 1. 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", false) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", true)

console.log("d. ", typeof undefined)


// 2. O número não é somado. 2+2 não se torna 4, e sim 22.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)


// 3. 
const primeiroValor = 2
const segundoValor = 2
const soma = primeiroValor + segundoValor

console.log(soma)



// Exercícios de escrita de código
// 1.

const idade = prompt("Qual a sua idade?")
const idadeAmigo = prompt("Qual a idade da sua melhor amiga?")

console.log("Sua idade é maior do que a da sua melhor amiga? Resposta:", Number(idade !== idadeAmigo))



// 2. Não há resto de divisão para números pares, pois o resultado sempre é 0, diferente para os números ímpares que são 1.

const numeroPar = prompt("Insira um número par")
const resultado = numeroPar % 2

console.log("Resto da divisão é", resultado)



// 3.
const idadeMeses = prompt("Qual a sua idade em meses?")
const idadeDias = prompt("Qual a sua idade em dias?")
const idadeHoras = prompt("Qual a sua idade em horas?")

console.log("Sua idade por meses é", idadeMeses, "Sua idade por dias é", idadeDias, "Sua idade por horas é", idadeHoras)



// 4.
const primeiroNumero = prompt("Escreva o primeiro número aqui")
const segundoNumero = prompt("Escreva o segundo número aqui")

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", false)
console.log("O segundo numero é divisível pelo primeiro?", false)
