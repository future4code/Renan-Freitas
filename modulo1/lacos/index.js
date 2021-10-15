// Exercícios de interpretação de código
// 1. A) É declarado que i pode ser somado até o número 4 (i < 5) e no final o resultado será 10.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)

// 2. A) Números maiores que 18.
//    B) O for pode ser utilizado para percorrer os valores contidos em um array, mas só foi possivel       acessar números específicos por causa do if.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


// 3. um asterisco por linha. Se for o número 1, vai ser um asterico em uma linha e assim por diante
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }



// Exercícios de escrita de código
// 1.
const pets = Number(prompt("Quantos bichinhos você tem?"))
const bichinhosDeEstimacao = []
if (pets > 0) {
  for (let i = 0; i < pets; i++) {
    let nomeDosPets = prompt("Escreva o nome dos seus bichinhos")
    bichinhosDeEstimacao.push(nomeDosPets)
  }
} else {
  console.log("Que Pena! Você pode adotar um pet!")
}
if (pets > 0) {
  console.log(bichinhosDeEstimacao)
} else {
}


// 2.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i of arrayOriginal) {
  console.log(i)
}

for (i = 0; i < arrayOriginal.length; i++) {
  const divisao = arrayOriginal[i] / 10
  console.log(divisao)
}

const arrayPares = [];
for (i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] % 2 === 0) {
    arrayPares.push(arrayOriginal[i])
  } else {
  }
}
console.log(arrayPares)

const arrayStrings = []
for (i = 0; i < arrayOriginal.length; i++) {
  const frase = `O elemento do índex ${arrayOriginal.indexOf(arrayOriginal[i])} é: ${arrayOriginal[i]}`
  arrayStrings.push(frase)
}
console.log(arrayStrings)

let maior = arrayOriginal[0]
let menor = arrayOriginal[0]
for (i = 0; i < arrayOriginal.length; i++) {
  if (menor > arrayOriginal[i]) {
    menor = arrayOriginal[i]
  } else {
  }
  if (maior < arrayOriginal[i]) {
    maior = arrayOriginal[i]
  } else {
  }
}
console.log(`O maior número é ${maior} e o menor número é ${menor}.`);