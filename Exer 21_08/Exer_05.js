class Maquinas{
    constructor() {
        this.nomeMaquina = null
        this.quantidadeEixos = null
        this.rotacoesMinuto = null
        this.consumoEnergiaEletrica = null
    }
    ligar(){
        console.log("Maquina ligada!!");
        
    }
    desligar(){
        console.log("Maquina ligada!!");
        
    }
    ajustarVelocidade(velocidadeRotacao){
        this.rotacoesMinuto = velocidadeRotacao
    }
}

class Furadeira extends Maquinas{
    constructor(){
        super()
    }
}