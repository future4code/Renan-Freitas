export interface Client {
  name: string;
  // Nome do cliente

  registrationNumber: number;
  // Número de cadastro do cliente na concessionária

  consumedEnergy: number;
  // Energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor em reais
}