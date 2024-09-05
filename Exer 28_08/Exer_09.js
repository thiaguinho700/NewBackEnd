var livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
    idadePublicacao: 0
}

livro.titulo = "Do Mil ao Milhão. Sem Cortar o Cafezinho."
livro.autor = "Primo Rico"
livro.anoPublicacao = "2018"
livro.genero = "Finanças"

console.log(livro);

livro['genero'] = "Aventura"

console.log(livro);


