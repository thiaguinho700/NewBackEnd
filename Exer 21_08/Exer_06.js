class Produtos{
    constructor() {
        this.nomeProduto = null
        this.quantidade = null
        this.precoProduto = null
        this.tipoComunicacao = null
        this.consumoEnergia = null
    }
}

class Fritadeira extends Produtos{
    constructor() {
        super()
    }

    ligar(){
        console.log("Equipamento ligado!!");
        
    }
    deligar(){
        console.log("Equipamento desligado!!");
        
    }
    ajute_temperatura(temp){
        console.log(`Temperatura do equipamento ajustado para ${temp}°C`, );
        
    }
}
class Televisao extends Produtos{
    constructor() {
        super()
    }

    ligar(){
        console.log("Equipamento ligado!!");
        
    }
    deligar(){
        console.log("Equipamento desligado!!");
        
    }
   
}
class ArCondicionado extends Produtos{
    constructor() {
        super()
    }

    ligar(){
        console.log("Equipamento ligado!!");
        
    }
    deligar(){
        console.log("Equipamento desligado!!");
        
    }
    ajute_temperatura(temp){
        console.log(`Temperatura do equipamento ajustado para ${temp}°C`, );
        
    }
}