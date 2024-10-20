import { ElementBuilder } from "../ElementBuilder.js"

const FIELDSET_ATTRIBUTES = {
    class: "teste",
    id: "elementPecaComDefeito"
}
export const elementPecaComDefeito = new ElementBuilder("fieldset")
.setAttributes(FIELDSET_ATTRIBUTES)
.getElement()

const LEGEND_TEXT_CONTENT = "不良数 Peça com Defeito:"
const legend = new ElementBuilder("legend")
.setTextContent(LEGEND_TEXT_CONTENT)
.appendTo(elementPecaComDefeito)

const INPUT_ATTRIBUTES = {
    type: "number",
    name: "pecaComDefeito",
    id: "pecaComDefeito",
    placeholder: "Valor de Defeito"
}
const input = new ElementBuilder("input")
    .setAttributes(INPUT_ATTRIBUTES)
    .appendTo(elementPecaComDefeito)