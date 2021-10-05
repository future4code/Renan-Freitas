
// 1. A continuará como 10 e B mudará para 5.
 let a = 10
 let b = 10

 console.log(b)

 b = 5
 console.log(a, b)



//2. Todos são convertidos para o número 10
 let a = 10
 let b = 20
 c = a
 b = c
 a = b

 console.log(a, b, c)



// 3. O programa irá calcular quanto a pessoa recebe por dia, por exemplo 
// se ela trabalha 8 horas e recebe 200, é calculado que a pessoa receba
// R$25 por hora.
//
// let quantasHorasTrabalhaPorDia = prompt("Quantas horas você trabalha por dia?")
// let quantoRecebePorDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)
 
 let p = prompt("Quantas horas você trabalha por dia?")
 let t = prompt("Quanto você recebe por dia?")
 alert(`Voce recebe ${t/p} por hora`)




// Exercícios de escrita de código
// 1.
const nome = prompt("Qual o seu nome?")
let idade = prompt("Qual sua idade?")

typeof nome
typeof idade 
console.log(typeof nome, typeof idade)
// d) Um objeto é uma coleção de propriedades, e uma propriedade é uma associação 
//    entre um nome (ou chave) e um valor.
// f) Apareceu exatamente o que eu perguntei. 

console.log("Olá,", nome, "você tem", idade, "anos!")


// 2.
let voceEstaUsandoUmaRoupaAzulHoje = false
let voceEstudouHoje = true
let jaAlmocouHoje = false

console.log(voceEstaUsandoUmaRoupaAzulHoje, voceEstudouHoje, jaAlmocouHoje)


// 3.
const a = 25
let b = 10
b = a
console.log(a, b)

