var pessoa = {
    nome:'',
    idade:0,
    solteiro:true,
    hobbies:[],
}


pessoa.nome = "Thiago Henrique Benedito Alves"
pessoa.idade = 18
pessoa.solteiro = false
pessoa.hobbies = ['Jogar Xadrez','Jogar jogos', "Estudar"]

var endereco = {
    rua:'',
    cidade:'',
    estado:'',
}

pessoa['endereco'] = endereco

pessoa['endereco']['rua'] = "Rua 123"
pessoa['endereco']['cidade'] = "Campinas"
pessoa['endereco']['estado'] = "São Paulo"

console.log(pessoa);


function mostrarInfoPessoa(data){
    const {nome, idade, solteiro, hobbies, endereco} = data

    console.log(`Nome : ${nome} : ${typeof(nome)}`);
    console.log(`Idade : ${idade} : ${typeof(idade)}`);
    console.log(`Solteiro : ${solteiro} : ${typeof(solteiro)}`);
    console.log(`Hobbies : ${hobbies} : ${typeof(hobbies)}`);    
    console.log(`Endereco : ${endereco} : ${typeof(endereco)}`);    
    console.log(`Rua : ${endereco['rua']} : ${typeof(endereco['rua'])}`);    
    console.log(`Cidade : ${endereco['cidade']} : ${typeof(endereco['cidade'])}`);    
    console.log(`Estado : ${endereco['estado']} : ${typeof(endereco['estado'])}`);    
}

mostrarInfoPessoa(pessoa)