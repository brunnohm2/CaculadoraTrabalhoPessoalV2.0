import { ElementBuilder } from "./ElementBuilder.js"
import { gerarOptionTempo } from "../script.js"
const FIELDSET_ATTRIBUTES = {
    class: "teste",
    id: "elementProducaoDoDias"
}
export const elementProducaoDoDia = new ElementBuilder("fieldset")
    .setAttributes(FIELDSET_ATTRIBUTES)
    .getElement()

const LEGEND_TEXT_CONTENT = "生産台数 Quant. Produção"
const legend = new ElementBuilder("legend")
    .setTextContent(LEGEND_TEXT_CONTENT)
    .appendTo(elementProducaoDoDia)

const INPUT_ATTRIBUTES = {
    type: "number",
    name: "producaoDoDia",
    id: "producaoDoDia",
    placeholder: 'Quantidade'
}
const input = new ElementBuilder("input")
    .setAttributes(INPUT_ATTRIBUTES)
    .addEventListener('input', gerarOptionTempo)
    .appendTo(elementProducaoDoDia)

