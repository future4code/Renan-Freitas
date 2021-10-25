function calculaPrecoTotal(quantidade) {
  let preco = 1.3
  if (quantidade >= 12) {preco = 1}
  precoTotal = quantidade * preco
  
  return precoTotal
}