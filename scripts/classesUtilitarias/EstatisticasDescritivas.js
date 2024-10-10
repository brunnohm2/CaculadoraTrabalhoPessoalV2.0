import Utilitarios from './Utilitarios.js'
import OpFundamentais from './OperacoesFundamentais.js'
export default class EstatisticasDescritivas {
    /**
     * Calcula Porcentagem
     * @param {*} valorParte valor que você deseja saber qual é porcentagem do total
     * @param {*} valorDeReferencia valor total ou valor de referência
     * @returns Retorna a porcentagem
     */
    static porcentagem = (valorParte, valorDeReferencia) => {
        return Utilitarios.autoDecimal((valorParte / valorDeReferencia) * 100)
    }
    /**
     * Calcula a média dos valores
     * @param {*} valores 
     * @returns Retorna a média formatada pelo autoDecimal (soma todos os valores e divide pela quantidade de cada valor que foi inserido)
     */
    static media = (...valores) => {
        if (valores.length === 0) return 0; // Evita divisão por zero
    
        const soma = OpFundamentais.adicao(...valores);
        return Utilitarios.autoDecimal(soma / valores.length);
    }
}
