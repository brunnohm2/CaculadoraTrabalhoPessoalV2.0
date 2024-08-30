import Calculadora from './calculadora.js';
class Tabela extends Calculadora {
    constructor() {
        super()
    }
    criarElemento(nome) {
        let elemento = document.createElement(nome)
        return elemento
    }
    addElementoFilho(elementoFilho) {
    }
}
let teste = new Tabela
teste.tudo
console.log("=======")
teste.quantidade = 1800
teste.defeitos = 15
teste.linhaValor = 17.5
teste.tempoDeOperacao = 9.42
teste.calcTempoOperacional()
teste.calcTaxaDeOperacao()
teste.calcTaxaDeDefeitos()
teste.calcMediaPorHora()
teste.calcTempoDeOperacaoPorPessoa()
teste.tudo

var números = [1, 2,3];
var total = números.reduce(
    function (total, numero) {
        return total * numero;
    },
    números[0]);
console.log(total);
let data = new Date()
let mes = 1 + data.getMonth()
let ano = data.getFullYear()
let dia = data.getDate()
console.log(`${ano}-${mes}-${dia}`)