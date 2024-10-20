import { ElementBuilder } from "../ElementBuilder.js";

const FIELDSET_ATTRIBUTES = {
    class: "teste",
    id: "elementMontagemDefeituosa"
}
export const elementMontagemDefeituosa = new ElementBuilder("fieldset")
    .setAttributes(FIELDSET_ATTRIBUTES)
    .getElement()

const legend = new ElementBuilder("legend")
    .setTextContent("Montagem Defeituosa:")
    .appendTo(elementMontagemDefeituosa)

const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "atraso",
    id: "atraso",
    min: 0,
    max: 100
}
const input = new ElementBuilder("input")
    .setAttributes(INPUT_ATTRIBUTES)
    .appendTo(elementMontagemDefeituosa)