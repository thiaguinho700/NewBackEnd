var contaBancaria = {
    titular:'',
    saldo :0,
    depositar(valor){
        this.saldo = this.saldo + valor
        console.log(`${valor} depositado com sucesso!`);
        
    },
    sacar(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo = this.saldo - valor
            console.log(this.saldo);
        }
    }
}

var cliente = {
    nome:'',
    conta:contaBancaria
}

cliente['nome'] = "Thiago"

function mostrarSaldo(clientePara){
 const {nome, conta} = clientePara

 console.log(`Nome cliente: ${nome}`);
 console.log(`Saldo conta: ${conta['saldo']}`);
}




cliente.conta.depositar(10000)
cliente.conta.sacar(5000)

mostrarSaldo(cliente)