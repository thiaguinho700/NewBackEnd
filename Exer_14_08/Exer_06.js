var saldo = 2000
var deposito = 200
var saque = 100

let operacaoDeposito = saldo + deposito
let operacaoSaque = saldo - saque

console.log("Saldo inicial: R$", saldo);
console.log("Depósito: R$", deposito);
console.log("Saldo após depósito: R$ " + operacaoDeposito);
console.log("Saque: R$ " + saque);
console.log("Saldo final: R$ " + operacaoSaque);