import { ElementBuilder } from "../ElementBuilder.js"

const FIELDSET_ATTRIBUTES = {
    class: "teste",
    id: "elementAtraso"
}
export const elementAtraso = new ElementBuilder("fieldset")
    .setAttributes(FIELDSET_ATTRIBUTES)
    .getElement()

const LEGEND_TEXT_CONTENT = "Atraso:"
const legend = new ElementBuilder("legend")
    .setTextContent(LEGEND_TEXT_CONTENT)
    .appendTo(elementAtraso)

const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "atraso",
    id: "atraso",
    min: 0,
    max: 100
}
const input = new ElementBuilder("input")
    .setAttributes(INPUT_ATTRIBUTES)
    .appendTo(elementAtraso)