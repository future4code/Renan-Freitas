// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Escreva uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Escreva a altura:"))
  const largura = Number(prompt("Escreva a largura:"))
  const area = altura * largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual o ano atual:"))
  const anoNascimento = Number(prompt("Escreva o ano do seu nascimento:"))
  const idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome:")
  const idade = prompt("Qual a sua idade:")
  const email = prompt("Qual o seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corF0 = prompt("Qual a sua primeira cor favorita:")
  const corF1 = prompt("Qual a sua segunda cor favorita:")
  const corF2 = prompt("Qual a sua terceira cor favorita:")
  const coresFavoritas = [corF0, corF1, corF2]

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const strMaiuscula = string.toUpperCase()

  return strMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  ingressosEspecNecessarios = custo/valorIngresso

  return ingressosEspecNecessarios

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  tamanhoStrings = string1.length === string2.length

  return tamanhoStrings

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const novaArray = array[array.length-1]
  const novaArray1 = array[0]
  array[array.length-1] = novaArray1
  array[0] = novaArray

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  checandoIgualdade = string1.toLowerCase() === string2.toLowerCase()
  
  return checandoIgualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Escreva o ano atual:"))
  const anoNascimento = Number(prompt("Escreva o ano de seu nascimento:"))
  const anoEmissaoRg = Number(prompt("Escreva o ano que sua carteira de identidade foi emitida:"))

  const checRenovarRG20anos = anoAtual - anoNascimento <= 20 && anoAtual - anoEmissaoRg >= 5
  console.log(checRenovarRG20anos) 


  const checRenovarRG50anos = anoAtual - anoNascimento > 20 && anoAtual - anoNascimento <= 50 && anoAtual - anoEmissaoRg >= 10
  console.log(checRenovarRG50anos)

  const checRenovarRG50mais = anoAtual - anoNascimento > 50 && anoAtual - anoEmissaoRg >= 15
  console.log(checRenovarRG50mais)

  console.log(checRenovarRG20anos || checRenovarRG50anos || checRenovarRG50mais)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const ehAnoBissexto = ano % 400 === 0|| ano % 4 === 0 && ano %100 !== 0

  return ehAnoBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  respostaUsuario = idade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim"

  console.log(respostaUsuario)

}