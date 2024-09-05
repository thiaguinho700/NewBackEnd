var calculadora = {
    soma(num1, num2) {
        return console.log(num1 + num2);

    },
    subtracao(num1, num2) {
        return console.log(num2 - num1);

    },
    multiplicacao(num1, num2) {
        return console.log(num2 * num1);
    },
    divisao(num1, num2) {
        if (num1 == 0 && num2 == 0) {
            return console.log("Resultado Indefinido!");
        } return console.log(num2 / num1);
    }
}

calculadora.soma(10, 10)
calculadora.subtracao(10, 10)
calculadora.multiplicacao(10, 10)
calculadora.divisao(10, 10)

calculadora.calcularMedia = function (array) {
    let sum = 0

    array.forEach(element => {
        sum = sum + element
    });

    return console.log(sum / array.length);

}

calculadora.calcularMedia([1,2,3,4,5])

