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
        }
    }
    
    comprobarSaldo = function() {
        console.log(this.saldo)
    }
    
}