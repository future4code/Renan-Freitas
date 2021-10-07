// Exercícios de interpretação de código
// 1.  A) undefined, B) null, c) 11, D) 3, E) (11), F) 9
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)


// 2. SUBI NUM ÔNIBUS EM MIRROCOS
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


// Exercícios de escrita de código
// 1.
const emailDoUsuario = prompt("Qual seu e-mail?")
const nomeDoUsuario = prompt("Qual seu nome?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}`
)


// 2.
const comidasFavoritas = ["Melancia", "Uva", "Batata frita", "Abacaxi", "Sorvete"]

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

const comidaPrefDoUsuario = prompt("Qual a sua comida preferida?")

comidasFavoritas.splice(3,1)
console.log(comidasFavoritas)

comidasFavoritas.push(comidaPrefDoUsuario)
console.log(comidasFavoritas)



// 3.
const listaDeTarefas = ["tarefa1", "tarefa2", "tarefa3"]
const tarefa1 = prompt("Qual a sua primeira tarefa do dia?")
const tarefa2 = prompt("Qual a sua segunda tarefa do dia?")
const tarefa3 = prompt("Qual a sua terceira tarefa do dia?")

const tarefasConcluidas = prompt("Quais tarefas foram concluídas?")
listaDeTarefas.splice(0,1)
console.log(listaDeTarefas)





