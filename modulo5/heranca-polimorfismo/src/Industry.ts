import { Place } from "./Place";

export class Industry extends Place {
  constructor(
    private machinesQuantity: number,
    // Quantidade de máquinas do local

    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}