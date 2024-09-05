var livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
    idadePublicacao: 0
}

livro['avaliacao'] = null

livro.titulo = "Thiago"
livro.autor = "Thiago Alves"
livro.anoPublicacao = 2006
livro.genero = "Programador"
livro.idadePublicacao = 18

if (livro['avaliacao']) {
    console.log("O livro já possui uma avaliação");
} else {
    livro['avaliacao'] = "Bom de mais!!"
    console.log(livro);

}