// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
console.log('opa');

// Resposta

// Neste caso, usei a 'interface' para criar as informações que vão ser guardadas em cada pessoa e o 'enum' para fazer um cadastro das profissões que foram usadas no teste, minimizando a possibilidade de erros de escrita.

/*

enum Profissao {
   Padeiro,
   Atriz
}

interface Pessoa {
   nome: string,
   idade: number,
   profissao?: Profissao 
}

const pessoa1: Pessoa = {
   nome: 'Maria',
   idade: 29,
   profissao: Profissao.Atriz
}

const pessoa2: Pessoa = {
   nome: 'Roberto',
   idade: 19,
   profissao: Profissao.Padeiro
}

const pessoa3: Pessoa = {
   nome: 'Laura',
   idade: 32,
   profissao: Profissao.Atriz
}

const pessoa4: Pessoa = {
   nome: 'Carlos',
   idade: 19,
   profissao: Profissao.Padeiro
}

console.log(pessoa1, pessoa2, pessoa3, pessoa4);

*/
