import Utils from "./utilities.js"
import Error from "./NumberError.js"
export default class Calculadora {
    constructor() {
        this._quantidade = 0
        this._linhaValor = 0
        this._tempoOperacional = 0
        this._taxaDeOperacao = 0
        this._defeitos = 0
        this._tempoDeOperacao = 0
        this._taxaDeDefeitos = 0
        this._mediaPorHora = 0
        this._tempoDeOperacaoPorPessoa = 0

        this._taxaDeOperacao2 = 0
        this._taxaDeDefeitos2 = 0
        this._mediaPorHora2 = 0
        this._tempoDeOperacaoPorPessoa2 = 0
        this._taxaDeOperacaoF = 0
        this._taxaDeDefeitosF = 0
        this._mediaPorHoraF = 0
        this._tempoDeOperacaoPorPessoaF = 0
    }

    set quantidade(value) { this.setValue(value, '_quantidade', "Quantidade") }
    set linhaValor(value) { this.setValue(value, '_linhaValor', "Valor da Linha") }
    set tempoOperacional(value) { this.setValue(value, '_tempoOperacional', "Tempo Operacional") }
    set tempoDeOperacao(value) { this.setValue(value, '_tempoDeOperacao', "Tempo de Operacao") }
    set defeitos(value) { this.setValue(value, '_defeitos', "Defeitos") }
    set taxaDeOperacao(value) { this.setValue(value, '_taxaDeOperacao', "Taxa de Operacao") }
    set taxaDeDefeitos(value) { this.setValue(value, '_taxaDeDefeitos', "Taxa de Defeitos") }
    set mediaPorHora(value) { this.setValue(value, '_mediaPorHora', "Media por Hora") }
    set tempoDeOperacaoPorPessoa(value) { this.setValue(value, '_tempoDeOperacaoPorPessoa', "Tempo de Operacao por Pessoa") }
    set taxaDeOperacao2(value) { this.setValue(value, '_taxaDeOperacao2', "") }
    set taxaDeDefeitos2(value) { this.setValue(value, '_taxaDeDefeitos2', "") }
    set mediaPorHora2(value) { this.setValue(value, '_mediaPorHora2', "") }
    set tempoDeOperacaoPorPessoa2(value) { this.setValue(value, '_tempoDeOperacaoPorPessoa2', "") }
    set taxaDeOperacaoF(value) { this.setValue(value, '_taxaDeOperacaoF', "") }
    set taxaDeDefeitosF(value) { this.setValue(value, '_taxaDeDefeitosF', "") }
    set mediaPorHoraF(value) { this.setValue(value, '_mediaPorHoraF', "") }
    set tempoDeOperacaoPorPessoaF(value) { this.setValue(value, '_tempoDeOperacaoPorPessoaF', "") }

    setValue(value, property, propertyName, mensagem) {
        Error.isNumber(value, propertyName, mensagem)
        Error.isPositiveNumber(value, propertyName)
        this[property] = Number(Utils.autoDecimal(value))
    }
    get tudo() {
        console.log(this.quantidade)
        console.log(this.linhaValor)
        console.log(this.tempoOperacional)
        console.log(this.tempoDeOperacao)
        console.log(this.defeitos)
        console.log(this.taxaDeOperacao)
        console.log(this.taxaDeDefeitos)
        console.log(this.mediaPorHora)
        console.log(this.tempoDeOperacaoPorPessoa)
    }
    get quantidade() { return this._quantidade }
    get linhaValor() { return this._linhaValor }
    get tempoOperacional() { return this._tempoOperacional }
    get tempoDeOperacao() { return this._tempoDeOperacao }
    get defeitos() { return this._defeitos }
    get taxaDeOperacao() { return this._taxaDeOperacao }
    get taxaDeDefeitos() { return this._taxaDeDefeitos }
    get mediaPorHora() { return this._mediaPorHora }
    get tempoDeOperacaoPorPessoa() { return this._tempoDeOperacaoPorPessoa }
    get taxaDeOperacao2() { return this._taxaDeOperacao2 }
    get taxaDeDefeitos2() { return this._taxaDeDefeitos2 }
    get mediaPorHora2() { return this._mediaPorHora2 }
    get tempoDeOperacaoPorPessoa2() { return this._tempoDeOperacaoPorPessoa2 }
    get taxaDeOperacaoF() { return this._taxaDeOperacaoF }
    get taxaDeDefeitosF() { return this._taxaDeDefeitosF }
    get mediaPorHoraF() { return this._mediaPorHoraF }
    get tempoDeOperacaoPorPessoaF() { return this._tempoDeOperacaoPorPessoaF }

    calcTempoOperacional() { this.tempoOperacional = Utils.dividir(Utils.multiplicar(this.quantidade, this.linhaValor), 3600) }
    calcTaxaDeOperacao() { this.taxaDeOperacao = Utils.porcentagem(this.tempoOperacional, this.tempoDeOperacao) }
    calcTaxaDeDefeitos() { this.taxaDeDefeitos = Utils.porcentagem(this.quantidade, (this.quantidade + this.defeitos)) }
    calcMediaPorHora() { this.mediaPorHora = Utils.dividir(this.quantidade, this.tempoDeOperacao) }
    calcTempoDeOperacaoPorPessoa() {
        if (
            this.linhaValor == 26.5 ||
            this.linhaValor == 20.3 ||
            this.linhaValor == 17.5 ||
            this.linhaValor == 21
        ) {
            this.tempoDeOperacaoPorPessoa = 2 * this.tempoDeOperacao
            return
        }
        this.tempoDeOperacaoPorPessoa = 1 * this.tempoDeOperacao
    }
    calcTaxaDeOperacaoF() { this.taxaDeOperacaoF = Utils.media(this.taxaDeOperacao, this.taxaDeOperacao2) }
    calcTaxaDeDefeitosF() { this.taxaDeDefeitosF = Utils.media(this.taxaDeDefeitos, this.taxaDeDefeitos2) }
    calcMediaPorHoraF() { this.mediaPorHoraF = Utils.media(this.mediaPorHora, this.mediaPorHora2) }
    calcTempoDeOperacaoPorPessoaF() { this.tempoDeOperacaoPorPessoaF = Utils.somar(this.tempoDeOperacaoPorPessoa, this.tempoDeOperacaoPorPessoa2) }
    calcOptions() {
        const minutos = 0.25
        const inicio = 4.17
        const max = 80
        for (let i = 0; i < max; i++) {
            let valor = calculo1(quantidade.value, multiplicador.value)
            valor = porcentagem(valor, inicio)
            if (valor <= 100) {
                let option = window.document.createElement('option')
                option.text = `${inicio} (${valor}%)`
                option.value = inicio
                tempo.appendChild(option)
            }
            inicio += minutos
        }
    }
}
