function verificaPalindromo(palavra) {
  let palavraReversa = palavra.split("").reverse().join("");
  return palavra === palavraReversa;
}

console.log(verificaPalindromo("radar"));
console.log(verificaPalindromo("casa"));
