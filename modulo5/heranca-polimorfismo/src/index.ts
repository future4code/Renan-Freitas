// 1 a) ela está definida como private e não tem um método get para pegar este atributo


import { Commerce } from "./Commerce";
import { Customer } from "./Customer";
import { Industry } from "./Industry";
import { Client } from "./Interfaces";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { User } from "./User";

const renan = new User('321', 'renan@gmail.com', 'Renan', 'senha321')


const renan2 = new Customer('321', 'renan@gmail.com', 'Renan', 'senha321', '4321')

// 3 a) senha está como atributo privado, não protected.
console.log({name: renan2.getName(),
email: renan2.getEmail(),
id: renan2.getId(),
cc: renan2.getCreditCard()})

// 4/5) 
console.log(renan2.introduceYourself())


// 1 a) a função calculateBill saiu como [Function: calculateBill]
const client: Client = {
  name: "Renan",
  registrationNumber: 123,
  consumedEnergy: 80,

  calculateBill: () => {
    return 2;
  }
}

console.log(client)

// 2 a) não é possível criar uma instância de uma classe abstrata.
// 2 b) chamar ela num subclasse
// const place = new Place()


const residence = new Residence(2, '01234567')
const commerce = new Commerce(5, '01245678')
const industry = new Industry(10, '12345678')

console.log(residence, commerce, industry)
