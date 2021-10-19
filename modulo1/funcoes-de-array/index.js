// Exercícios de interpretação de código
// 1. Será impresso o item, o index e o array.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


// 2. Será impresso os nomes contidos no array.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)


// 3. Será impresso apenas o objeto que seja diferente do nome "Chijo".
// const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
//  ]
 
//  const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
//  })
 
//  console.log(novoArrayC)



// Exercícios de escrita de código
// 1.
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const nomesPets = pets.map((petNomes) => {
   return petNomes.nome

})

console.log(nomesPets)


const petSalsicha = pets.filter((pet) => {
   return pet.raca === "Salsicha"

})

console.log(petSalsicha)

const petPoodle = pets.filter((pet) => {
   return pet.raca === "Poodle"}).map((pet) => {

   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})

 console.log(petPoodle)



// 2.
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


const nomesProdutos = produtos.map((produto) => {
   return produto.nome
})

console.log(nomesProdutos)


const desconto = produtos.map((produto) => {
   return produto.nome + " | " + produto.preco * 0.95
})

console.log(desconto)


const bebidas = produtos.filter((produto) => {
   return produto.categoria === "Bebidas"
})

console.log(bebidas)


const nomeYpe = produtos.filter((produto) => {
   return produto.nome.includes("Ypê")
})

console.log(nomeYpe)


const nomesYpe = produtos.filter((produto) => {
   return produto.nome.includes("Ypê")}).map((produto) => {

   return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(nomesYpe)

   



