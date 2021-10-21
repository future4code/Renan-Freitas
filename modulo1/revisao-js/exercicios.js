// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i])
    }

    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
const arrayOrdenado = (a, b) => {
    const comparacao = a - b
    return comparacao
  }
  return array.sort(arrayOrdenado)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const NumPares = (a) => {
        const calculo = a % 2 === 0
        return calculo
      }
      return array.filter(NumPares)
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const paresElevados = (a) => {
        if (a % 2 === 0) {
          return a ** 2
        }
      }
      return array.filter(paresElevados).map(paresElevados)
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
  for (i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num1
  let menorNumero = num2
  if (num1 < num2) {
    maiorNumero = num2
    menorNumero = num1
  }
  const numeros = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: maiorNumero - menorNumero,
  }
  return numeros

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const primeirosPares = []
  for (let i = 0; primeirosPares.length < n; i++) {
    if (i % 2 === 0) {
      primeirosPares.push(i)
    }
  }
  return primeirosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return 'Equilátero'
      } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return 'Isósceles'
      } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return 'Escaleno'
      }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a,b){return a-b})
    let segundoMaior = array[array.length - 2]
    let segundoMenor = array[1]
    return [segundoMaior, segundoMenor]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoaAnonima = {...pessoa, nome: "ANÔNIMO"}
   return pessoaAnonima
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let alturaMinima = 1.5
    let idadeMinima = 14
    let idadeMaxima = 60

    let pessoasComPermissao = pessoas.filter((pessoa) => {
        return (pessoa.idade > idadeMinima && pessoa.idade < idadeMaxima && pessoa.altura >= alturaMinima)
    })
    return pessoasComPermissao
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let alturaMinima = 1.5
    let idadeMinima = 14
    let idadeMaxima = 60
    
    let pessoasSemPermissao = pessoas.filter((pessoa) => {
        return pessoa.idade <= idadeMinima || pessoa.idade >= idadeMaxima || pessoa.altura < alturaMinima
    })
    return pessoasSemPermissao
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}