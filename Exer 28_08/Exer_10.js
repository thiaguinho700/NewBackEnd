var livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
    idadePublicacao: 0
}

livro.titulo = "Thiago"
livro.autor = "Thiago Alves"
livro.anoPublicacao = 2006
livro.genero = "Programador"
livro.idadePublicacao = 18

livro['avalicao'] = "Bom de mais!!"

console.log(livro);

delete livro['avalicao']

console.log(livro);

