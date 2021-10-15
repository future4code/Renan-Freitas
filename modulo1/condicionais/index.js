// Exercícios de interpretação de código
// 1. A) Testa se o número escrito pelo usuário é par ou não. O teste espera ser par. 
//    B) Números pares
//    C) Números ímpares
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


// 2. A) Para exibir o preço da fruta. Caso o usuário coloque uma fruta que não esteja listada, cai no default e o preço será "5".
//    B) Será 2.25
//    C) Seria 5, pois o break para o item C e caso tirasse o break do preso "5" seria o dele, que no caso, o preço errado.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// 3. A) Recebe qualquer número que o usuário informe.
//    B) Caso digite "10", será impresso "Esse número passou no teste", e com -10 não aparecerá nenhuma mensagem.
//    C) "mensagem is not defined" pois não está no else.
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)




// Exercícios de escrita de código
// 1.
const idUsuario = Number(prompt("Qual a sua idade?"))

if (idUsuario >= 18) {
    console.log("Você pode dirigir.")
}
else {
    console.log("Você não pode dirigir.")
}


// 2.
const turnoDoAluno = prompt("Informe qual turno você estuda. M ou V ou N")

if (turnoDoAluno === "M") {
    console.log("Bom dia!")
}
else if (turnoDoAluno === "V") {
    console.log("Boa tarde!")
}
else if (turnoDoAluno === "N") {
    console.log("Boa noite!")
}
else {
    console.log("Turno não identificado.")
}


// 3.
const turnoDoAluno1 = prompt("Informe qual turno você estuda. M ou V ou N")

switch (turnoDoAluno1) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno não identificado.")
}


// 4.
const generoFilme = prompt("Qual o gênero do filme?").toLowerCase() // pois "fantasia" está escrito abaixo como minúsculo, assim como pede no enunciado da questão.
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
}
else { 
    console.log("Escolha outro filme")
}
