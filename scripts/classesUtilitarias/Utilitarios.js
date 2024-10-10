export default class Utilitarios {
    /***********************************************
     * Auto determina as casas decimais de um número
     * @param {*} valor Valor para formatar
     * @returns Retorna o valor formatado
     */
    static autoDecimal = valor => {
        const num = Number(valor)
        if(Number.isInteger(num)) return num.toFixed(0)

        const casasDecimais = this.contarCasasDecimais(num)
        return Number(num.toFixed(casasDecimais >= 3 ? 2 : casasDecimais))
    }
    /***********************************************************
     * Converte o número em uma string, verifica se há um ponto, se houver, conta o número de dígitos após o ponto, se não tiver o ponto decimal, a função retorna 0.
     * @param {*} valor 
     * @returns Retorna o número de casas decimais
     */
    static contarCasasDecimais = valor => valor.toString().split('.')[1]?.length || 0;
}
