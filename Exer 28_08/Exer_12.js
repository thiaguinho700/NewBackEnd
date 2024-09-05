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

livro['avaliacao'] = "Bom demais!!"

console.log(livro);

delete livro['avaliacao']

console.log(livro);

const pessoa = {
    nome: "Bruce Banner", 
    dataNascimento: "25/01/1980", 
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
}

pessoa['seguroSocial'] = '12312312'
pessoa['cpf'] = '22244533211'

function exibirDados(dados) {
    const { nome, dataNascimento, carteiraIdentidade, email, telefone, cidade, estado, seguroSocial, cpf } = dados;

    console.log(`Nome: ${nome}`);
    console.log(`Data de Nascimento: ${dataNascimento}`);
    console.log(`Carteira de Identidade (4 primeiros dígitos): ${carteiraIdentidade.slice(0, 4)}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Cidade: ${cidade}`);
    console.log(`Estado: ${estado}`);
    console.log(`CPF (4 primeiros dígitos): ${cpf.slice(0, 4)}`);
}

exibirDados(pessoa);
