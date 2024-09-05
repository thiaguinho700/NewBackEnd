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


function mostrarInfoPessoa(data){
    const {nome, idade, solteiro, hobbies} = data

    console.log(`Nome : ${nome} : ${typeof(nome)}`);
    console.log(`Idade : ${idade} : ${typeof(idade)}`);
    console.log(`Solteiro : ${solteiro} : ${typeof(solteiro)}`);
    console.log(`Hobbies : ${hobbies} : ${typeof(hobbies)}`);    
}

mostrarInfoPessoa(pessoa)
