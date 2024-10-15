import { ElementBuilder } from "./ElementBuilder.js"
import { gerarOptionTempo } from "../script.js"
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

const FIELDSET_ATTRIBUTES = {
    class: "teste",
    id: "elementCT",
}

export const elementCT = new ElementBuilder("fieldset")
    .setAttributes(FIELDSET_ATTRIBUTES)
    .getElement()

export const legenda = new ElementBuilder("legend")
    .setTextContent("Cycle Time:")
    .appendTo(elementCT)

export const SELECT_ATTRIBUTES = {
    class: "SelectClass",
    name: "cycleTime",
    id: "cycleTime",
}
export const select = new ElementBuilder("select")
    .setAttributes(SELECT_ATTRIBUTES)
    .addEventListener('input', gerarOptionTempo)
    .appendTo(elementCT)
    .getElement()

const ATRIBUTOS_OPTION = {
    value: 0,
    selected: "",
    disabled: ""
}
export const option = new ElementBuilder("option")
    .setAttributes(ATRIBUTOS_OPTION)
    .setTextContent("Select Line CT")
    .appendTo(select)

for (const [nome, valores] of Object.entries(ctContents)) {
    let optgroup = new ElementBuilder("optgroup")
        .setAttributes({ label: nome })
        .appendTo(select)
        .getElement();

    for (const { valor, legenda } of valores) {
        let optionGroup = new ElementBuilder("option");
        optionGroup.setAttributes({ value: valor })
            .setTextContent(`${valor} - (${legenda})`)
            .appendTo(optgroup);
    }
}