interface Smartphone {
  carica: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  nome: string;
  carica: number;
  numeroChiamate: number;
  constructor(_nome: string, _carica: number, _numeroChiamate: number) {
    this.nome = _nome;
    this.carica = _carica;
    this.numeroChiamate = _numeroChiamate;
  }

  public unaRicarica(x: number): void {
    this.carica += x;
  }

  public minutiChiamata(x: number): void {
    //Il metodo, prima di procedere, verifica se il credito residuo è sufficiente a sostenere la durata della chiamata.
    if (this.carica - x * 0.2 < 0) {
      console.log(
        `Gentile ${this.nome}, il suo credito residuo non è sufficiente ad effettuare questa chiamata.`
      );
    } else {
      this.carica -= x * 0.2;
      this.numeroChiamate++;
    }
  }

  public number404(): number {
    return this.carica;
  }

  public getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  public azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const cosmin = new User("Cosmin", 0, 0);
const david = new User("David", 0, 0);
const rosario = new User("Rosario", 0, 0);

cosmin.unaRicarica(10);
cosmin.minutiChiamata(10);
cosmin.minutiChiamata(2);
cosmin.minutiChiamata(5);
cosmin.minutiChiamata(30);

console.log(`Credito residuo di ${cosmin.nome}: ${cosmin.number404()}`);
console.log(
  `Chiamate effettuate da ${cosmin.nome}: ${cosmin.getNumeroChiamate()}`
);
cosmin.minutiChiamata(10);

david.unaRicarica(20);
david.minutiChiamata(10);
david.minutiChiamata(2);
david.minutiChiamata(5);
david.minutiChiamata(30);
david.minutiChiamata(10);

console.log(`Credito residuo di ${david.nome}: ${david.number404()}`);
console.log(
  `Chiamate effettuate da ${david.nome}: ${david.getNumeroChiamate()}`
);

rosario.unaRicarica(8);
rosario.minutiChiamata(5);
rosario.minutiChiamata(3);
rosario.minutiChiamata(2);
rosario.minutiChiamata(4);
rosario.minutiChiamata(1);
rosario.minutiChiamata(3);

console.log(`Credito residuo di ${rosario.nome}: ${rosario.number404()}`);
console.log(
  `Chiamate effettuate da ${rosario.nome}: ${rosario.getNumeroChiamate()}`
);
