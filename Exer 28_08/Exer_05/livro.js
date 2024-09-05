class Livro{
    constructor(){
        this.titulo = ''
        this.autor = ''
        this.anoPublicacao = ''
        this.genero = ''
    }
}

const livroDoAno = new Livro()

livroDoAno.titulo = "Do Mil ao Milhão. Sem Cortar o Cafezinho."
livroDoAno.autor = "Primo Rico"
livroDoAno.anoPublicacao = "2018"
livroDoAno.genero = "Finanças"

console.log(livroDoAno);
