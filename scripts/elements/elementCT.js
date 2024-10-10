const ctContents =
{
    'CBS':[
        { valor: 47.5, multiplicador: 1, legenda: '1 Pessoa' },
        { valor: 26.5, multiplicador: 2, legenda: '2 Pessoas' }
    ],
    'J/Y':[
        { valor: 23.5, multiplicador: 1, legenda: '1 Pessoa' },
        { valor: 20.3, multiplicador: 2, legenda: '2 Pessoas' }
    ],
    'J/A':[
        { valor: 19.5, multiplicador: 1, legenda: '2 Máquinas' },
        { valor: 17, multiplicador: 2, legenda: '3 Máquinas' }
    ],
    'F/Y':[
        { valor: 22.5, multiplicador: 1, legenda: '1 Pessoa' },
        { valor: 17.5, multiplicador: 2, legenda: '2 Pessoas' }
    ],
    'F/A':[
        { valor: 39, multiplicador: 1, legenda: 'T4D' },
        { valor: 21, multiplicador: 2, legenda: 'T4V' }
    ],
    'Companion':[
        { valor: 0, multiplicador: 1, legenda: '0' }
    ]
}
export let elementCT = document.createElement("fieldset")
elementCT.setAttribute("class", "teste")
elementCT.setAttribute("id", "elementCT")
let conteudo = `<legend>CT:</legend>`
conteudo +=`
<select
    name="CT"
    id="CT"
>
    <option value="0" selected disabled >Select Line CT</option>
`

    for (let nome in ctContents) {
        conteudo += `<optgroup label="${nome}">`
        for (let i in ctContents[nome]) {
            const element = ctContents[nome][i]
            let {valor, legenda} = element
            console.log(legenda)
            conteudo += `<option value="${valor}">${valor} - (${legenda})</option>`
        }
        conteudo += `</optgroup>`
    }

conteudo += ` </select>`
elementCT.innerHTML = conteudo