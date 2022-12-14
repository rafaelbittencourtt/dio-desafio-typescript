//  Desafio 3

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';
let saldoTotal = 0;

function somarAoSaldo(soma: number) {
   saldoTotal += soma;
   campoSaldo.innerHTML = saldoTotal.toString();
   limparCampoSoma();
}

function limparCampoSoma() {
   soma.value = "";
}

function limparSaldo() {
   campoSaldo.innerHTML = '';
   saldoTotal = 0;
   campoSaldo.innerHTML = saldoTotal.toString();
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
