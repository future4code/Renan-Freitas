function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    
    let n = arrayDeNumeros.filter((numero) => {
        return numero === numeroEscolhido
    })

    if (n.length > 0) {
      msg = `O número ${numeroEscolhido} aparece ${n.length}x`
    }
    else {
      msg = `Número não encontrado`
    }
    return msg
  }
