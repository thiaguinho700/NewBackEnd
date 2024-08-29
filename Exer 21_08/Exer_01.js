const { log } = require("console")

class Carro {
    constructor() {
        this.marca = null
        this.modelo = null
        this.ano = null
        this.motorLigado = false
    }

    ligar_motor() {
        this.motorLigado = true
        console.log("Motor ligado!!");

    }

    desligar_motor() {
        this.motorLigado = false
        console.log("Motor desligado!!");

    }

    status_motor() {
        console.log(this.motorLigado ? "Motor esta ligado!!" : "Motor esta desligado!!");

    }
}

let carro = new Carro()

carro.ligar_motor()
carro.status_motor()
carro.desligar_motor()
carro.status_motor()