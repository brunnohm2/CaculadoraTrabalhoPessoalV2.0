export default class Utils {
    /**
     * Calcula Porcentagem
     * @param {*} valorParte valor que você deseja saber qual é porcentagem do total
     * @param {*} valorDeReferencia valor total ou valor de referência
     * @returns Retorna a porcentagem
     */
    static porcentagem = (valorParte, valorDeReferencia) => {
        return this.autoDecimal((valorParte / valorDeReferencia) * 100)
    }
    /**
     * Calcula a média dos valores
     * @param {*} valores 
     * @returns Retorna a média formatada pelo autoDecimal (soma todos os valores e divide pela quantidade de cada valor que foi inserido)
     */
    static media = (...valores) => {
        if (valores.length === 0) return 0; // Evita divisão por zero
    
        const soma = this.somar(...valores);
        return this.autoDecimal(soma / valores.length);
    }
    /**
     * Auto determina as casas decimais de um número
     * @param {*} valor Valor para formatar
     * @returns Retorna o valor formatado
     */
    static autoDecimal = valor => {
        const num = Number(valor)
        if(Number.isInteger(num)) return num.toFixed(0)

        const casasDecimais = this.contarCasasDecimais(num)
        return num.toFixed(casasDecimais >= 3 ? 2 : casasDecimais)
    }
    /**
     * Converte o número em uma string, verifica se há um ponto, se houver, conta o número de dígitos após o ponto, se não tiver o ponto decimal, a função retorna 0.
     * @param {*} valor 
     * @returns Retorna o número de casas decimais
     */
    static contarCasasDecimais = valor => valor.toString().split('.')[1]?.length || 0;
    /**
     * Soma os valores e retorna o resultado
     * @param  {...any} valores Inserir os valores para somar Ex. somar(2,3,4)
     * @returns Retorna o resultado da soma
     */
    static somar(...valores) {
        // ! Sintaxe utilizada Arrow Functions
        const total = valores.reduce((total, proximoValor) => total + proximoValor, 0)
        return this.autoDecimal(total)
    }
    /**
     * Faz a multiplicação dos valores
     * @param  {...any} valores Inserir os valores Ex.: multiplicar(2,3,4)
     * @returns retorna o produto da multiplicação
    */
    static multiplicar(...valores) {
        // ! Sintaxe utilizada Arrow Functions
        const total = valores.reduce((total, proximoValor) => total * proximoValor, 1)
        return this.autoDecimal(total)
    }
    /**
     * Faz a divisão de dois números
     * @param {*} dividendo Inserir o número que você deseja dividir.
     * @param {*} divisor Inserir o número pelo qual você divide o dividendo
     * @returns retorna o resultado da divisão
     */
    static dividir(dividendo, divisor) {
        return this.autoDecimal(dividendo / divisor)
    }
}