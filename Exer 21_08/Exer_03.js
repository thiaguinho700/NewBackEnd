class Automovel{
    constructor(){
        this.corAutomovel = null
        this.modelo = null
        this.tipoCombustivel = null
        this.quantidadeRodas = null
    }
    ligarCarro(){
        console.log("Carro ligado!!");
        
    }

    desligarCarro(){
        console.log("Carro desligado!!");
        
    }
    abrirVidro(){
        console.log("Vidro aberto!!");
    }
    descerVidro(){
        console.log("Vido fechado!!");
        
    }
}

class Carro extends Automovel{
    constructor(){
        super()
    }
}
class Moto extends Automovel{
    constructor(){
        super()
    }
}
class Caminhao extends Automovel{
    constructor(){
        super()
    }
}

let carro = new Carro()
let moto = new Moto()
let caminhao = new Caminhao()


carro.corAutomovel = "Azul"
carro.modelo = "Fiat"
carro.tipoCombustivel = "Gasolina"
carro.quantidadeRodas = "4"

moto.corAutomovel = "Preto"
moto.modelo = "Honda"
moto.tipoCombustivel = "Etanol"
moto.quantidadeRodas = "2"

caminhao.corAutomovel = "Verde"
caminhao.modelo = "Fiat"
caminhao.tipoCombustivel = "Etanol"
caminhao.quantidadeRodas = "8"

carro.abrirVidro()
moto.ligarCarro()
caminhao.descerVidro()