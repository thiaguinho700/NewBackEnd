function verificaMaioridade(idade) {
    if (idade >= 18) {
        return "É maior de idade.";
    } else {
        return "Não é maior de idade.";
    }
}

console.log(verificaMaioridade(20));
