var User = /** @class */ (function () {
    function User(_nome, _carica, _numeroChiamate) {
        this.nome = _nome;
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.unaRicarica = function (x) {
        this.carica += x;
    };
    User.prototype.minutiChiamata = function (x) {
        //Il metodo, prima di procedere, verifica se il credito residuo è sufficiente a sostenere la durata della chiamata.
        if (this.carica - x * 0.2 < 0) {
            console.log("Gentile ".concat(this.nome, ", il suo credito residuo non \u00E8 sufficiente ad effettuare questa chiamata."));
        }
        else {
            this.carica -= x * 0.2;
            this.numeroChiamate++;
        }
    };
    User.prototype.number404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var cosmin = new User("Cosmin", 0, 0);
var david = new User("David", 0, 0);
var rosario = new User("Rosario", 0, 0);
cosmin.unaRicarica(10);
cosmin.minutiChiamata(10);
cosmin.minutiChiamata(2);
cosmin.minutiChiamata(5);
cosmin.minutiChiamata(30);
console.log("Credito residuo di ".concat(cosmin.nome, ": ").concat(cosmin.number404()));
console.log("Chiamate effettuate da ".concat(cosmin.nome, ": ").concat(cosmin.getNumeroChiamate()));
cosmin.minutiChiamata(10);
david.unaRicarica(20);
david.minutiChiamata(10);
david.minutiChiamata(2);
david.minutiChiamata(5);
david.minutiChiamata(30);
david.minutiChiamata(10);
console.log("Credito residuo di ".concat(david.nome, ": ").concat(david.number404()));
console.log("Chiamate effettuate da ".concat(david.nome, ": ").concat(david.getNumeroChiamate()));
rosario.unaRicarica(8);
rosario.minutiChiamata(5);
rosario.minutiChiamata(3);
rosario.minutiChiamata(2);
rosario.minutiChiamata(4);
rosario.minutiChiamata(1);
rosario.minutiChiamata(3);
console.log("Credito residuo di ".concat(rosario.nome, ": ").concat(rosario.number404()));
console.log("Chiamate effettuate da ".concat(rosario.nome, ": ").concat(rosario.getNumeroChiamate()));
