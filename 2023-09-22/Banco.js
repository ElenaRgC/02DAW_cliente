class Banco {
  
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    
    ingresarDinero = function(cantidad) {
        this.saldo += cantidad;
    }
    
    sacarDinero = function(cantidad) {
        if (this.saldo > cantidad) {
            this.saldo -= cantidad;
        } else {
            console.log("Saldo insuficiente.")
        }
    }
    
    comprobarSaldo = function() {
        console.log(this.saldo)
    }
    
}

let b = new Banco("Elena", 200);

b.comprobarSaldo();

b.ingresarDinero(100);
b.comprobarSaldo();

b.sacarDinero(200);
b.comprobarSaldo();

b.sacarDinero(300);
b.comprobarSaldo();