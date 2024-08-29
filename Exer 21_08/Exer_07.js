class Livros {
    constructor() {
        this.nomeLivro = null
        this.quantidade = null
        this.preco = null
        this.nomeAutor = null
        this.NumeroEdicao = null
    }

    emprestar(nomeLivro) {
        console.log(`${nomeLivro} emprestado com sucesso!`);
        
    }
    devolver() {
        console.log(`${nomeLivro} devolvido com sucesso!`);
    }
}