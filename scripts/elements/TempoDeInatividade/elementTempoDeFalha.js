import { ElementBuilder } from "../ElementBuilder.js"

const FIELDSET_ATTRIBUTES = {
    class: "teste",
    id: "elementTempoDeFalha"
}
export const elementTempoDeFalha = new ElementBuilder("fieldset")
    .setAttributes(FIELDSET_ATTRIBUTES)
    .getElement()

const LEGEND_TEXT_CONTENT = "Tempo de Falha:"
const legend = new ElementBuilder("legend")
    .setTextContent(LEGEND_TEXT_CONTENT)
    .appendTo(elementTempoDeFalha)

const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "atraso",
    id: "atraso",
    min: 0,
    max: 100
}
const input = new ElementBuilder("input")
    .setAttributes(INPUT_ATTRIBUTES)
    .appendTo(elementTempoDeFalha)