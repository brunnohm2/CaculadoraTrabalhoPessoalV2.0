import { ElementBuilder } from "../ElementBuilder.js"
import { gerarOptionTempo } from "../../script.js"
import { CYCLE_TIME_235 } from "../../CONTANTES.js"

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

for (const [nome, valores] of Object.entries(CYCLE_TIME_235)) {
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