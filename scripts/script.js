import Calculadora from "./calculadora.js"
import { HoraConverter } from "./classesUtilitarias/HoraConverter.js"
import OperacoesFundamentais from "./classesUtilitarias/OperacoesFundamentais.js"
import Utilitarios from "./classesUtilitarias/Utilitarios.js"
import { CYCLE_TIME_235 } from "./CONTANTES.js"
import { ElementBuilder } from "./elements/ElementBuilder.js"

export function gerarOptionTempo() {
    let calculadora = new Calculadora
    let formProducaoDoDia = document.querySelector("#producaoDoDia")
    let formCycleTime = document.querySelector("#cycleTime")
    
    formProducaoDoDia = Number(formProducaoDoDia.value)
    formCycleTime = Number(formCycleTime.value)

    if(formCycleTime <= 0) return
    if(formProducaoDoDia <= 0) return

    calculadora.producaoDoDia = formProducaoDoDia
    calculadora.cycleTime = formCycleTime
    calculadora.calcularTempoLinhaIdeal()  

    let minutos = 0.25
    let inicio = 4.17
    let max = 50

    let formTempoLinhaReal = document.querySelector("#tempoLinhaReal")
    formTempoLinhaReal.textContent= ""
    for(let i=0; i<max; i++){
        calculadora.tempoLinhaReal = inicio
        calculadora.calculaPctTempoLinhaReal()
        calculadora.calcularMediaPorHora()
        let mediaPorHora = calculadora.getMediaPorHora("turnoAtual")
        let pctTempoLinhaReal = calculadora.getPctTempoLinhaReal("turnoAtual")
        let classe = null
        if(pctTempoLinhaReal<=100){
             const classes = [
                { limiteInferior: 93, classe: "safe" },
                { limiteInferior: 90, classe: "alert" },
                { limiteInferior: -Infinity, classe: "danger" }
            ] 
            classe = classes.find(({ limiteInferior }) => pctTempoLinhaReal >= limiteInferior).classe
            
            let option = new ElementBuilder("option")
                .setAttributes({
                    value : inicio,
                    class : classe
                })
                .setTextContent(`${inicio} (${pctTempoLinhaReal}%)(${mediaPorHora})`)
                .appendTo(formTempoLinhaReal)
        }
        inicio += minutos
    }
}
function ReturnNumber(number){
    return Number(number)
}
export function retornarMultiplicador(ctValue){
    for(const [key, value] of Object.entries(CYCLE_TIME_235)){
        for(const {multiplicador, valor} of value){
            if (valor === ctValue) return multiplicador

        }
    }
}
export function gerarTabela(){
    const tabela = document.querySelector("#divTabela1")
    tabela.className = "visivel"

    const divTempoDeInatividade = document.querySelector("#TempoDeInatividade")
    divTempoDeInatividade.className = "visivel"
    
    const producaoDoDia = ReturnNumber(document.querySelector("#producaoDoDia").value)
    const cycleTime = ReturnNumber(document.querySelector("#cycleTime").value)
    const tempoLinhaReal = ReturnNumber(document.querySelector("#tempoLinhaReal").value)
    const pecaComDefeito = ReturnNumber(document.querySelector("#pecaComDefeito").value)

    const calculadora = new Calculadora
    calculadora.producaoDoDia = Number(producaoDoDia)
    calculadora.cycleTime = Number(cycleTime)
    calculadora.tempoLinhaReal = Number(tempoLinhaReal)
    calculadora.pecaComDefeito = Number(pecaComDefeito)
    calculadora.calcularTempoLinhaIdeal()
    
    calculadora.calculaPctTempoLinhaReal()
    calculadora.calcularPecaSemDefeitoPCT()
    calculadora.calcularMediaPorHora()
    calculadora.calcularTempoAcumulativoPorPessoa(retornarMultiplicador(calculadora.cycleTime), calculadora.tempoLinhaReal)
    
    const tabProducaoDoDia = window.document.querySelector("#tabProducaoDoDia")
    const tabTempoLinhaIdeal = window.document.querySelector("#tabTempoLinhaIdeal")
    const tabTempoLinhaReal = window.document.querySelector("#tabTempoLinhaReal")
    const tabPctTempoLinhaReal = window.document.querySelector("#tabPctTempoLinhaReal")
    const tabPecaComDefeito = window.document.querySelector("#tabPecaComDefeito")
    const tabPctPecaSemDefeito = window.document.querySelector("#tabPctPecaSemDefeito")
    const tabMediaPorHora = window.document.querySelector("#tabMediaPorHora")
    const tabTempoAcumulativoPorPessoa = window.document.querySelector("#tabTempoAcumulativoPorPessoa")

    tabProducaoDoDia.textContent = calculadora.producaoDoDia
    tabTempoLinhaIdeal.textContent = calculadora.tempoLinhaIdeal
    tabTempoLinhaReal.textContent = calculadora.tempoLinhaReal
    tabPctTempoLinhaReal.textContent = calculadora.getPctTempoLinhaReal("turnoAtual") + "%"
    tabPecaComDefeito.textContent = calculadora.pecaComDefeito
    tabPctPecaSemDefeito.textContent = calculadora.getPctPecaSemDefeito("turnoAtual") + "%"
    tabMediaPorHora.textContent = calculadora.getMediaPorHora("turnoAtual")
    tabTempoAcumulativoPorPessoa.textContent = calculadora.getTempoAcumulativoPorPessoa("turnoAtual")
    
    const valorTotal = document.querySelector("#valorTotal")
    valorTotal.value = OperacoesFundamentais.subtrair(calculadora.tempoLinhaReal, calculadora.tempoLinhaIdeal)
    valorTotal.setAttribute("min","0")
    valorTotal.setAttribute("max",`${valorTotal.value}`)

    const atraso = window.document.querySelector("#atraso")
    const montagemDefeituosa = window.document.querySelector("#montagemDefeituosa")
    const paradasFrequentes = window.document.querySelector("#paradasFrequentes")
    const tempoDeFalha = window.document.querySelector("#tempoDeFalha")
    const trocaDeFerramenta = window.document.querySelector("#trocaDeFerramenta")

    atraso.setAttribute("max",`${valorTotal.value}`)
    montagemDefeituosa.setAttribute("max",`${valorTotal.value}`)
    paradasFrequentes.setAttribute("max",`${valorTotal.value}`)
    tempoDeFalha.setAttribute("max",`${valorTotal.value}`)
    trocaDeFerramenta.setAttribute("max",`${valorTotal.value}`)

    const valorSoma = document.querySelector("#valorSoma")
    valorSoma.value = valorTotal.value
    calcularRange()
}
export function calcularRange(){
    const atraso = window.document.querySelector("#atraso")
    const montagemDefeituosa = window.document.querySelector("#montagemDefeituosa")
    const paradasFrequentes = window.document.querySelector("#paradasFrequentes")
    const tempoDeFalha = window.document.querySelector("#tempoDeFalha")
    const trocaDeFerramenta = window.document.querySelector("#trocaDeFerramenta")
    const valorSoma = document.querySelector("#valorSoma")
    const valorTotal = document.querySelector("#valorTotal")
    const valorTotalHora = document.querySelector("#valorTotalHora")
    valorSoma.value = valorTotal.value

    valorTotalHora.value = HoraConverter.converter(Number(valorTotal.value))

    const legendAtraso = window.document.querySelector("#elementAtraso>legend")
    let legendBKP = "遅れ Atraso:"
    legendAtraso.textContent = `${legendBKP} ${atraso.value} / ${HoraConverter.converter(atraso.value)}`

    const legendMontagemDefeituosa = window.document.querySelector("#elementMontagemDefeituosa>legend")
    legendBKP = "組付け不良 Montagem Defeituosa:"
    legendMontagemDefeituosa.textContent = `${legendBKP} ${montagemDefeituosa.value}  / ${HoraConverter.converter(montagemDefeituosa.value)}`

    const legendParadasFrequentes = window.document.querySelector("#elementParadasFrequentes>legend")
    legendBKP = "頻発停止 Paradas Frequentes:"
    legendParadasFrequentes.textContent = `${legendBKP} ${paradasFrequentes.value}  / ${HoraConverter.converter(paradasFrequentes.value)}`

    const legendTempoDeFalha = window.document.querySelector("#elementTempoDeFalha>legend")
    legendBKP = "故障時間 Tempo de Falha:"
    legendTempoDeFalha.textContent = `${legendBKP} ${tempoDeFalha.value}  / ${HoraConverter.converter(tempoDeFalha.value)}`

    const legendTrocaDeFerramenta = window.document.querySelector("#elementTrocaDeFerramenta>legend")
    legendBKP = "段替・刃交 Troca de ferramenta/configuração:"
    legendTrocaDeFerramenta.textContent = `${legendBKP} ${trocaDeFerramenta.value}  / ${HoraConverter.converter(trocaDeFerramenta.value)}`

    valorSoma.value = Utilitarios.autoDecimal(valorSoma.value-OperacoesFundamentais.adicao(
        atraso.value,
        montagemDefeituosa.value,
        paradasFrequentes.value,
        tempoDeFalha.value,
        trocaDeFerramenta.value
    ))
}