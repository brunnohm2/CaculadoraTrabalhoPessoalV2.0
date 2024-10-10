import Utilitarios from "./Utilitarios.js";
export default class OperacoesFundamentais {
    /**
     * Adição: Soma os valores e retorna o resultado
     * @param  {...any} valores Inserir os valores para somar Ex. adicao(2,3,4)
     * @returns Retorna o resultado da soma
    */
   static adicao(...valores) {
       // ! Sintaxe utilizada Arrow Functions
       const total = valores.reduce((total, proximoValor) => total + proximoValor, 0)
       return Utilitarios.autoDecimal(total)
    }
    /**
     * Faz a multiplicação dos valores
     * @param  {...any} valores Inserir os valores Ex.: multiplicar(2,3,4)
     * @returns retorna o produto da multiplicação
    */
    static multiplicar(...valores) {
        // ! Sintaxe utilizada Arrow Functions
        const total = valores.reduce((total, proximoValor) => total * proximoValor, 1)
        return Utilitarios.autoDecimal(total)
    }
    /**
     * Faz a divisão de dois números
     * @param {*} dividendo Inserir o número que você deseja dividir.
     * @param {*} divisor Inserir o número pelo qual você divide o dividendo
     * @returns retorna o resultado da divisão
     */
    static dividir(dividendo, divisor) {
        if (divisor === 0) throw new Error("Divisão por zero não é permitida.")
        return Utilitarios.autoDecimal(dividendo / divisor)
    }
}
