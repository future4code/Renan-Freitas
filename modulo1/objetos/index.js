// Exercícios de interpretação de código.
// 1. A) Matheus Nachtergaele, Virginia Cavendish e canal: Globo, horario: 14h
//   
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// 2. A) Será impresso 3x idade: 3, nome: Jubo, raça: SRD  
//    B) Faz um espelhamento, uma cópia  do objeto ou array inteiro.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// 3. A) Dará false e undefined
//    B) A primeira deu false pois o backender foi declarado como tal. E o segundo deu undefined pois não foi declarado.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// Exercícios de escrita de código
// 1.
// Inventei um nome e apelidos aleatórios
const pessoa = {
    nome: "Karla", 
    apelidos: ["Kah", "Karlinha", "Kaka"]
 }

 const mensagem = (pessoa)  => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ou ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

    return pessoa

 }

 mensagem(pessoa)

//  B)
const novos_apelidos = {
    ...pessoa,
    apelidos: ["Karlota", "Kaki", "KK"]
}

mensagem(novos_apelidos)


// 2.
const pessoa1 = {
    nome: "Junior",
    idade: 14,
    profissao: "Estudante"
}

const pessoa2 = {
    nome: "Karla",
    idade: 50,
    profissao: "Enfermeira"
}

const objetos = (pessoas) => {
    const resultado = 
    [pessoa.nome,
    pessoa.nome.length,
    pessoa.idade,
    pessoa.profissao,
    pessoa.profissao.lenght]
    
    return resultado              

}

console.log(resultado(pessoa1))
console.log(resultado(pessoa2))


// 3.
const carrinho = []

const fruta1 = {
    nome: 'Melancia',
    disponibilidade: true
}
const fruta2 = {
    nome: 'Limão',
    disponibilidade: true
}
const fruta3 = {
    nome: 'Laranja',
    disponibilidade: true
}

const feira = (frutas) => {
    carrinho.push(frutas)
}

feira(fruta1)
feira(fruta2)
feira(fruta3)


feira()

console.log(carrinho)



 
 

