var anoAtual = new Date().getFullYear()

class Livro{
    constructor(){
        this.titulo = ''
        this.autor = ''
        this.anoPublicacao = 0
        this.genero = ''
        this.idadePublicacao = 0
    }
}
var mostrarDetalhes = new Livro()

mostrarDetalhes.titulo = "Thiago"
mostrarDetalhes.autor = "Thiago Alves"
mostrarDetalhes.anoPublicacao = 2006
mostrarDetalhes.genero = "Programador"
mostrarDetalhes.idadePublicacao = anoAtual - mostrarDetalhes.anoPublicacao 


console.log(mostrarDetalhes);

