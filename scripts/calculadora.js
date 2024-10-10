import OpFundamentais from "./classesUtilitarias/OperacoesFundamentais.js"
import EstDescritivas from "./classesUtilitarias/EstatisticasDescritivas.js"
export default class Calculadora {
    // Constantes da classe
    static TURNOS_VALIDOS = ['turnoAtual', 'turnoPassado', 'turnoMedia', 'turnoSoma']
    /*
     * PROPRIEDADES_VALIDAS inicializa como null, após o carregamento do construtor, captura as propriedades de this._dados
     */
    static PROPRIEDADES_VALIDAS = null
    /**
        * Construtor da classe Calculadora.
        * Inicializa os dados utilizados nos cálculos.
     */
    constructor() {
        this.opFundamentais = OpFundamentais
        this.estDescritivas = EstDescritivas

        this._dados = this.#inicializarDados()
        this.#inicializarPropriedadesValidas()
    }
    /* Adaptadores de dependências externas */
    // Estatísticas Descritivas
    /**
        * Calcula a a média entre dois valores.
        * @param {number} value1 - Primeiro valor.
        * @param {number} value2 - Segundo valor.
        * @returns {number} Média entre value1 e value2 (value1 + value2) / 2.
    */
    #media(value1, value2) { return this.estDescritivas.media(value1, value2) }
    /**
        * Calcula a porcentagem entre dois valores.
        * @param {number} value1 - Valor a ser comparado (numerador).
        * @param {number} value2 - Valor de referência (denominador).
        * @returns {number} Porcentagem calculada (value1 / value2 * 100).
    */
    #porcentagem(value1, value2) { return this.estDescritivas.porcentagem(value1, value2) }
    // Operações Fundamentais
    /**
        * Calcula a soma de múltiplos valores.
        * @param {...number} value - Valores a serem somados.
        * @returns {number} Resultado da soma dos valores fornecidos.
    */
    #somar(...value) { return this.opFundamentais.adicao(...value) }
    /**
        * Calcula a multiplicação de múltiplos valores.
        * @param {...number} value - Valores a serem multiplicados.
        * @returns {number} Resultado da multiplicação dos valores fornecidos.
    */
    #multiplicar(...valores) { return this.opFundamentais.multiplicar(...valores) }
    /**
        * Calcula a divisão entre dois valores.
        * @param {number} dividendo - O valor a ser dividido.
        * @param {number} divisor - O valor pelo qual o dividendo será dividido.
        * @returns {number} Resultado da divisão (dividendo / divisor).
    */
    #dividir(dividendo, divisor) { return this.opFundamentais.dividir(dividendo, divisor) }

    #inicializarDados() {
        return {
            valorProducaoDia: 0,
            ct: 0,
            tempoLinhaReal: 0,
            valorPecaDefeito: 0,
            tempoLinhaAbsoluto: 0,
            pctTempoLinhaReal: { turnoAtual: 0, turnoPassado: 0, turnoMedia: 0 },
            pctPecaSemDefeito: { turnoAtual: 0, turnoPassado: 0, turnoMedia: 0 },
            mediaPorHora: { turnoAtual: 0, turnoPassado: 0, turnoMedia: 0 },
            tempoAcumulativoPorPessoa: { turnoAtual: 0, turnoPassado: 0, turnoSoma: 0 }
        }
    }
    #inicializarPropriedadesValidas() { Calculadora.PROPRIEDADES_VALIDAS = Object.keys(this._dados) }
    // SETTERS
    /**
     * Define o valor da produção do dia.
     * @param {number} value - Valor da produção do dia.
     */
    set valorProducaoDia(value) { this.#setValue(value, "valorProducaoDia") }
    /**
     * Define o valor de CT.
     * @param {number} value - Valor de CT.
    */
    set ct(value) { this.#setValue(value, "ct") }
    /**
     * Define o tempo de linha real.
     * @param {number} value - Tempo de linha real.
    */
    set tempoLinhaReal(value) { this.#setValue(value, "tempoLinhaReal") }
    /**
     * Define o valor de peças com defeito.
     * @param {number} value - Valor de peças com defeito.
     */    
    set valorPecaDefeito(value) { this.#setValue(value, "valorPecaDefeito" ) }
    /**
     * Define o tempo de linha absoluto.
     * @param {number} value - Tempo de linha absoluto.
    */
    set tempoLinhaAbsoluto(value) { this.#setValue(value, "tempoLinhaAbsoluto") }
    /**
     * Define a porcentagem do tempo de linha real para um turno específico.
     * @param {string} turno - Nome do turno (turnoAtual, turnoPassado, turnoMedia).
     * @param {number} value - Valor a ser atribuído.
    */
    setPctTempoLinhaReal(turno, value) { this.setDadosPorTurno("pctTempoLinhaReal", turno, value) }
    /**
     * Define a porcentagem de peças sem defeito para um turno específico.
     * @param {string} turno - Nome do turno (turnoAtual, turnoPassado, turnoMedia).
     * @param {number} value - Valor a ser atribuído.
    */
    setPctPecaSemDefeito(turno, value) { this.setDadosPorTurno("pctPecaSemDefeito", turno, value) }
    /**
     * Define a média de produção por hora para um turno específico.
     * @param {string} turno - Nome do turno (turnoAtual, turnoPassado, turnoMedia).
     * @param {number} value - Valor a ser atribuído.
    */
    setMediaPorHora(turno, value) { this.setDadosPorTurno("mediaPorHora", turno, value) }
    /**
     * Define o tempo acumulativo por pessoa para um turno específico.
     * @param {string} turno - Nome do turno (turnoAtual, turnoPassado, turnoSoma).
     * @param {number} value - Valor a ser atribuído.
    */
    setTempoAcumulativoPorPessoa(turno, value) { this.setDadosPorTurno("tempoAcumulativoPorPessoa", turno, value) }
    /**
     * Define um valor específico para uma propriedade e turno.
     * @param {string} propriedade - Nome da propriedade a ser alterada.
     * @param {string} turno - Nome do turno.
     * @param {number} value - Valor a ser atribuído.
    */
    setDadosPorTurno(propriedade, turno, value) {
        this.#validarPropriedadeTurno(propriedade,turno)
        this._dados[propriedade][turno] = value
    }
    /**
     * Define um valor para uma propriedade específica dos dados.
     * @param {number} value - Valor a ser atribuído.
     * @param {string} key - Nome da chave que será alterada.
    */
    #setValue(value, key) {
        this.#validarPropriedade(key)
        this.#validarNumero(value)
        this._dados[key] = value
    }
    // Getters
    get valorProducaoDia() { return this.#getValue('valorProducaoDia') }
    get ct() { return this.#getValue('ct') }
    get tempoLinhaReal() { return this.#getValue('tempoLinhaReal') }
    get valorPecaDefeito() { return this.#getValue('valorPecaDefeito') }
    get tempoLinhaAbsoluto() { return this.#getValue('tempoLinhaAbsoluto') }
    getPctTempoLinhaReal(turno) { return this.#getter("pctTempoLinhaReal", turno) }
    getPctPecaSemDefeito(turno) { return this.#getter("pctPecaSemDefeito", turno) }
    getMediaPorHora(turno) { return this.#getter("mediaPorHora", turno) }
    getTempoAcumulativoPorPessoa(turno) { return this.#getter("tempoAcumulativoPorPessoa", turno) }
    #getter(propriedade, turno) {
        this.#validarTurno(turno)
        return this._dados[propriedade][turno]
    }
    #getValue(key) {
        this.#validarPropriedade(key)
        return this._dados[key]
    }
    // Validações
    /**
     * Valida se a propriedade informada é válida.
     * @param {string} propriedade - Nome da propriedade a ser validada.
     * @throws {Error} Lança um erro se o propriedade não for válida.
    */
    #validarPropriedade(propriedade) {
        if (!Calculadora.PROPRIEDADES_VALIDAS.includes(propriedade)) {
            throw new Error(`Propriedade inválida: '${propriedade}'. As propriedades válidas são: ${Calculadora.PROPRIEDADES_VALIDAS.join(', ')}.`)
        }
    }
    /**
     * Valida se o turno informado é válido.
     * @param {string} turno - Nome do turno a ser validado.
     * @throws {Error} Lança um erro se o turno não for válido.
    */
    #validarTurno(turno) {
        if (!Calculadora.TURNOS_VALIDOS.includes(turno)) {
            throw new Error(`Turno inválido: '${turno}'. Os turnos válidos são: ${Calculadora.TURNOS_VALIDOS.join(', ')}.`)
        }
    }
    #validarPropriedadeTurno(propriedade, turno) {
        this.#validarPropriedade(propriedade)
        this.#validarTurno(turno)
    }
    /**
     * Valida se o valor é um número positivo.
     * @param {number} value - Valor a ser validado.
     * @throws {Error} Lança um erro se o valor não for um número positivo.
    */
    #validarNumero(value) {
        if (typeof value !== 'number') throw new Error(`Tipo inválido: O valor '${value}' deve ser do tipo número.`)
        if (value < 0) throw new Error(`Valor negativo inválido: O valor '${value}' não pode ser negativo.`)
        if (value > 5000) console.warn(`Valor suspeito: O valor '${value}' é muito alto. Verifique se está correto.`)
    }

    /**
        * Calcula o tempo de linha absoluto com base no valor da produção do dia e no CT.
    */
    calcularTempoLinhaAbsoluto() {
        // Tempo de Linha Absoluto = (Valor da Produção do Dia * CT) / 3600
        const { valorProducaoDia, ct } = this._dados
        const value = this.#dividir(this.#multiplicar(valorProducaoDia, ct), 3600)
        this.#setValue(value, "tempoLinhaAbsoluto")
    }
    /**
        * Calcula a porcentagem do tempo de linha real.
    */
    calculaTempoLinhaReal() {
        // pct da Linha Real = (Tempo de Linha Absoluto / Tempo de Linha Real) * 100
        const { tempoLinhaReal, tempoLinhaAbsoluto } = this._dados
        const value = this.#porcentagem(tempoLinhaAbsoluto, tempoLinhaReal)
        this.setPctTempoLinhaReal('turnoAtual', value)
    }
    /**
        * Calcula a porcentagem de peças sem defeito.
    */
    calcularPecaSemDefeitoPCT() {
        // pct de Peças Sem Defeito = (Valor da Produção do Dia / (Valor da Produção do Dia + Valor de Peças Descartadas)) * 100
        const { valorPecaDefeito, valorProducaoDia } = this._dados
        const value = this.#porcentagem(valorProducaoDia, (valorProducaoDia + valorPecaDefeito))
        this.setPctPecaSemDefeito('turnoAtual', value)
    }
    /**
        * Calcula a porcentagem de peças sem defeito.
    */
    calcularMediaPorHora() {
        // Media por Hora = Valor da Produção do Dia / Tempo de Linha Real
        const { valorProducaoDia, tempoLinhaReal } = this._dados
        const value = this.#dividir(valorProducaoDia, tempoLinhaReal)
        this.setMediaPorHora('turnoAtual', value)
    }
    /**
        * Calcula a média da porcentagem do tempo de linha real entre dois turnos.
    */
    calcularTempoLinhaRealMediaDosTurnos() {
        // Média da pct dos dois Ban = (pct do Tempo Real da Linha 1 + pct do Tempo Real da Linha 2) / 2
        const { turnoAtual, turnoPassado} = this._dados.pctTempoLinhaReal
        const value = this.#media(turnoAtual, turnoPassado)
        this.setDadosPorTurno('pctTempoLinhaReal', 'turnoMedia', value)
    }
    /**
        * Calcula a média da porcentagem de peças sem defeito entre dois turnos.
    */
    calcularPecaSemDefeitoMediaDosTurnos() {
        const { turnoAtual, turnoPassado } = this._dados.pctPecaSemDefeito
        const value = this.#media(turnoAtual, turnoPassado)
        this.setDadosPorTurno('pctPecaSemDefeito', 'turnoMedia', value)
    }
    /**
        * Calcula a média da produção por hora entre dois turnos.
    */
    calcularMediaPorHoraMediaDosTurnos() {
        const { turnoAtual, turnoPassado } = this._dados.mediaPorHora
        const value = this.#media(turnoAtual, turnoPassado)
        this.setDadosPorTurno('mediaPorHora', 'turnoMedia', value)
    }
    /**
        * Calcula o tempo acumulativo por pessoa somando os valores dos turnos atuais e passados.
    */
    calcularTempoAcumulativoPorPessoaDosTurnos() {
        const { turnoAtual, turnoPassado } = this._dados.tempoAcumulativoPorPessoa
        const value = this.#somar(turnoAtual, turnoPassado)
        this.setDadosPorTurno('tempoAcumulativoPorPessoa', 'turnoSoma', value)
    }
}
// calcTempoDeOperacaoPorPessoa() {
//     if (
//         this.linhaValor == 26.5 ||
//         this.linhaValor == 20.3 ||
//         this.linhaValor == 17.5 ||
//         this.linhaValor == 21
//     ) {
//         this.tempoDeOperacaoPorPessoa = 2 * this.tempoDeOperacao
//         return
//     }
//     this.tempoDeOperacaoPorPessoa = 1 * this.tempoDeOperacao
// }
// calcOptions() {
//     const minutos = 0.25
//     const inicio = 4.17
//     const max = 80
//     for (let i = 0; i < max; i++) {
//         let valor = calculo1(quantidade.value, multiplicador.value)
//         valor = porcentagem(valor, inicio)
//         if (valor <= 100) {
//             let option = window.document.createElement('option')
//             option.text = `${inicio} (${valor}%)`
//             option.value = inicio
//             tempo.appendChild(option)
//         }
//         inicio += minutos
//     }
// }
