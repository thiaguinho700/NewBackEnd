const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


class Cliente {
    constructor() {
        this.nome = null
        this.saldo = 0
        this.profissao = null
    }

    pixConta(valor) {
        this.saldo = this.saldo + Number(valor)
        console.log(`O Pix com valor de ${valor} depositado!`);
    }
    emprestimoConta(valor) {
        if (this.saldo <= 0) {
            console.log("Saldo insuficiente");
            EscolhasBanco()
        } else {
            this.saldo = this.saldo - Number(valor)
        }

    }
    saqueConta(valor) {

        if (this.saldo <= 0) {
            console.log("Saldo insuficiente");
            EscolhasBanco()
        } else {
            this.saldo = this.saldo - Number(valor)
            console.log(`Valor de ${valor} foi sacado da conta!`);
        }
    }
    extratoConta() {
        console.log(`O saldo total é de R$${this.saldo}`);
    }
}

let cliente = new Cliente()


function Banco() {
    rl.question("Digite seu nome:", (nomeRes) => {
        console.log("\n");
        rl.question("Digite sua profissão:", (profissaoRes) => {

            cliente.nome = nomeRes
            cliente.profissao = profissaoRes
            console.log("\n");
            console.log(`Olá ${cliente.nome}, tudo bom?\nEscolha umas das funções`);

            EscolhasBanco()

        })
    })
}
Banco()

function EscolhasBanco() {
    console.log("\n");
    console.log("PIX - 1\nEmprestimo - 2\nSaque - 3\nExtrato - 4");
    rl.question("Qual a sua escolha? (Escreva apenas o número correspondente): ", (escolhaRes) => {
        switch (Number(escolhaRes)) {
            case 1:
                console.log("\n");
                rl.question("Insira apenas o valor do PIX:", (pixRes) => {
                    cliente.pixConta(pixRes)
                    cliente.extratoConta()
                    DesejaContinuar()
                })
                break;
            case 2:
                console.log("\n");
                rl.question("Insira o valor do emprestimo:", (empresRes) => {
                    cliente.emprestimoConta(empresRes)
                    cliente.extratoConta()
                    DesejaContinuar()
                })
                break
            case 3:
                console.log("\n");
                rl.question("Insira o valor do saque:", (saqueRes) => {
                    cliente.saqueConta(saqueRes)
                    cliente.extratoConta()
                    DesejaContinuar()
                })
                break
            case 4:
                console.log("\n");
                cliente.extratoConta()
                DesejaContinuar()
                break
            default:
                console.log("Escolha ínvalida!!");
                EscolhasBanco()
                break;
        }

    })
}

function DesejaContinuar() {
    console.log("\n");

    rl.question("Deseja continuar? s/n: ", (answerCon) => {
        if (answerCon.toLowerCase() === "s") {
            EscolhasBanco()
        } else if (answerCon.toLowerCase() === 'n') {
            return
        } else {
            console.log("Escolha invalida!!");
            console.log(answerCon);

            DesejaContinuar()
        }
    })
}