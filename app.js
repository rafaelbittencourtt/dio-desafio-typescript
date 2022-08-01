"use strict";
//  Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
let saldoTotal = 0;
function somarAoSaldo(soma) {
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
