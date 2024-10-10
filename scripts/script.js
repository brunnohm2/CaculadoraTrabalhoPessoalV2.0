
export let tempo           = window.document.querySelector('select#tempo')
export let multiplicador   = window.document.querySelector('select#ct')
export let descarte        = window.document.querySelector('input#descarte')
export let trabalhadores   = window.document.querySelector('select#trabalhadores')

export let tabQuantidade           = window.document.querySelector('td#tabQuantidade')
export let tabCalc1                = window.document.querySelector('td#tabCalc1')
export let tabTempo                = window.document.querySelector('td#tabTempo')
export let tabCalc2                = window.document.querySelector('td#tabCalc2')
export let tabDescarte             = window.document.querySelector('td#tabDescarte')
export let tabDescartePercentual   = window.document.querySelector('td#tabDescartePercentual')
export let tabMediaPorHora         = window.document.querySelector('td#tabMediaPorHora')
export let tabCalc3                = window.document.querySelector('td#tabCalc3')

export let mediaPrimeira = window.document.querySelector('div#mediaPrimeira')
export let mediaFinal = window.document.querySelector('div#mediaFinal')

export let aCalc2                  = window.document.querySelector('input#aCalc2')
export let aMediaDP                = window.document.querySelector('input#aMediaDP')
export let aMediaPorHora           = window.document.querySelector('input#aMediaPorHora')
export let aCalc3                  = window.document.querySelector('input#aCalc3')

export let tabFinalCalc2           = window.document.querySelector('td#tabFinalCalc2')
export let tabFinalMediaDP         = window.document.querySelector('td#tabFinalMediaDP')
export let tabFinalMediaPorHora    = window.document.querySelector('td#tabFinalMediaPorHora')
export let tabFinalCalc3           = window.document.querySelector('td#tabFinalCalc3')

export function calculo1(a, b){
    a = Number(a)
    b = Number(b)

    return ((a*b)/3600).toFixed(2)
}
export function porcentagem(a, b){
    a = Number(a)
    b = Number(b)
    let c = (a/b)*100

    if(c == 100) return c.toFixed(0)

    return c.toFixed(2)
}
export function porcentagem2(a, b){
    a = Number(a)
    b = Number(b)
    let c = (a/(b+a))*100

    if(c == 100)  return c.toFixed(0)

    return ((a/(b+a))*100).toFixed(2)
}
export function media(a, b){
    return (a/b).toFixed(2)
}
export function gerarOptionTempo(){
    console.log(quantidade)
    if(!Number(quantidade.textContent)>0) return alert("xxx")
    if(!Number(multiplicador.value) != 0) return

    tempo.innerHTML = ''
    let minutos = 0.25
    let inicio = 4.17
    let max = 80

    for(let i=0; i<max; i++){
        let valor = calculo1(quantidade.value, multiplicador.value)
        valor = porcentagem(valor, inicio)
        if(valor<=100){
            let option = window.document.createElement('option')
            option.text = `${inicio} (${valor}%)`
            option.value = inicio
            tempo.appendChild(option)
        }
        inicio += minutos
    }
}
export function dadosTabela(){
    tabQuantidade.innerHTML = quantidade.value
    tabCalc1.innerHTML = calculo1(Number(quantidade.value),Number(multiplicador.value))
    tabTempo.innerHTML = tempo.value
    tabCalc2.innerHTML = porcentagem(Number(tabCalc1.innerHTML), Number(tabTempo.innerHTML))+'%'
    tabDescarte.innerHTML = descarte.value
    tabDescartePercentual.innerHTML = porcentagem2(Number(quantidade.value), Number(descarte.value))+'%'
    tabMediaPorHora.innerHTML = media(Number(quantidade.value), Number(tempo.value))
    tabCalc3.innerHTML = Number(tempo.value)*Number(valorMultiplicador())
    mediaPrimeira.classList.remove('oculto')
    mediaPrimeira.classList.add('visivel')
    mediaFinal.classList.remove('oculto')
    mediaFinal.classList.add('visivel')
}
export function valorMultiplicador(){
    if(Number(multiplicador.value) == 26.5) return 2
    if(Number(multiplicador.value) == 20.3) return 2
    if(Number(multiplicador.value) == 17.5) return 2
    if(Number(multiplicador.value) == 21  ) return 2
    if(Number(multiplicador.value) == 20.7) return 2
    return 1
}
export function finalCalc1(){
    tabFinalCalc2.innerHTML = porcentagem(Number(tabCalc1.innerHTML), Number(tabTempo.innerHTML))
    tabFinalCalc2.innerHTML = ((Number(tabFinalCalc2.innerHTML)+Number(aCalc2.value))/2)
    tabFinalCalc2.innerHTML = Number(tabFinalCalc2.innerHTML).toFixed(2)+'%'

    tabFinalMediaDP.innerHTML = porcentagem2(Number(quantidade.value), Number(descarte.value))
    tabFinalMediaDP.innerHTML = ((Number(tabFinalMediaDP.innerHTML)+Number(aMediaDP.value))/2)
    tabFinalMediaDP.innerHTML = Number(tabFinalMediaDP.innerHTML).toFixed(2)+'%'

    tabFinalMediaPorHora.innerHTML = Number(media(Number(quantidade.value), Number(tempo.value)))
    tabFinalMediaPorHora.innerHTML = ((Number(tabFinalMediaPorHora.innerHTML)+Number(aMediaPorHora.value))/2)
    tabFinalMediaPorHora.innerHTML = Number(tabFinalMediaPorHora.innerHTML).toFixed(2)

    let testar = (Number(aCalc3.value)+Number(tabCalc3.innerHTML))
    tabFinalCalc3.innerHTML = Number(testar).toFixed(2)
}