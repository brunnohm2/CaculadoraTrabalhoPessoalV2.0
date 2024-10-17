import Calculadora from "./calculadora.js"
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
    tabPctTempoLinhaReal.textContent = calculadora.getPctTempoLinhaReal("turnoAtual") + " %"
    tabPecaComDefeito.textContent = calculadora.pecaComDefeito
    tabPctPecaSemDefeito.textContent = calculadora.getPctPecaSemDefeito("turnoAtual") + " %"
    tabMediaPorHora.textContent = calculadora.getMediaPorHora("turnoAtual")
    tabTempoAcumulativoPorPessoa.textContent = calculadora.getTempoAcumulativoPorPessoa("turnoAtual")
    console.log()
//     tabQuantidade.innerHTML = quantidade.value
//     tabCalc1.innerHTML = calculo1(quantidade.value,multiplicador.value)
//     tabTempo.innerHTML = tempo.value
//     tabCalc2.innerHTML = porcentagem(tabCalc1.innerHTML, tabTempo.innerHTML)+'%'
//     tabDescarte.innerHTML = descarte.value
//     tabDescartePercentual.innerHTML = porcentagem2(quantidade.value, descarte.value)+'%'
//     tabMediaPorHora.innerHTML = media(quantidade.value, tempo.value)
//     tabCalc3.innerHTML = tempo.value*valorMultiplicador()
//     mediaPrimeira.classList.remove('oculto')
//     mediaPrimeira.classList.add('visivel')
//     mediaFinal.classList.remove('oculto')
//     mediaFinal.classList.add('visivel')
}
// function valorMultiplicador(){
//     if(Number(multiplicador.value) == 26.5) return 2
//     if(Number(multiplicador.value) == 20.3) return 2
//     if(Number(multiplicador.value) == 17.5) return 2
//     if(Number(multiplicador.value) == 21  ) return 2
//     if(Number(multiplicador.value) == 20.7) return 2
//     return 1
// }
// function finalCalc1(){
//     tabFinalCalc2.innerHTML = porcentagem(Number(tabCalc1.innerHTML), Number(tabTempo.innerHTML))
//     tabFinalCalc2.innerHTML = ((Number(tabFinalCalc2.innerHTML)+Number(aCalc2.value))/2)
//     tabFinalCalc2.innerHTML = Number(tabFinalCalc2.innerHTML).toFixed(2)+'%'

//     tabFinalMediaDP.innerHTML = porcentagem2(Number(quantidade.value), Number(descarte.value))
//     tabFinalMediaDP.innerHTML = ((Number(tabFinalMediaDP.innerHTML)+Number(aMediaDP.value))/2)
//     tabFinalMediaDP.innerHTML = Number(tabFinalMediaDP.innerHTML).toFixed(2)+'%'

//     tabFinalMediaPorHora.innerHTML = Number(media(Number(quantidade.value), Number(tempo.value)))
//     tabFinalMediaPorHora.innerHTML = ((Number(tabFinalMediaPorHora.innerHTML)+Number(aMediaPorHora.value))/2)
//     tabFinalMediaPorHora.innerHTML = Number(tabFinalMediaPorHora.innerHTML).toFixed(2)

//     let testar = (Number(aCalc3.value)+Number(tabCalc3.innerHTML))
//     tabFinalCalc3.innerHTML = Number(testar).toFixed(2)
// }