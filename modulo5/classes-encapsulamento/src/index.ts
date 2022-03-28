type UserAccountType = {
  cpf: string,
  name: string,
  age: number,
  balance: number,
  transactions: TransactionType[]
}

type TransactionType = {
  description: string,
  value: number,
  date: string
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: TransactionType[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
     transactions: TransactionType[]
  ) {
     this.cpf = cpf
     this.name = name
     this.age = age
     this.transactions = transactions
  }

  public getAtributes(): UserAccountType {
    return {
      cpf: this.cpf,
      name: this.name,
      age: this.age,
      balance: this.balance,
      transactions: this.transactions
    }
  }

}

// 2
class Transaction {
  private description: string
  private value: number
  private date: string

  constructor(description: string, value: number, date: string) {
    this.description = description
    this.value = value
    this.date = date
  }

  public getAtributes(): TransactionType {
    return {
      description: this.description, 
      value: this.value,
      date: this.date
    }
  }
}

const transactionsDario = new Transaction('pedágio', 24, '28/02/2022')
const dario = new UserAccount('103.957.998-08', 'Dario', 28, [transactionsDario.getAtributes()])

console.log(dario.getAtributes())




