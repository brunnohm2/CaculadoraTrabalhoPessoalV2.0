import { ElementBuilder } from "./ElementBuilder.js"

const FIELDSET_ATTRIBUTES = {
    class: "teste",
    id: "elementProducaoDoDias"
}
export const elementProducaoDoDia = new ElementBuilder("fieldset")
    .setAttributes(FIELDSET_ATTRIBUTES)
    .getElement()

const LEGEND_TEXT_CONTENT = "Produção do Dia:"
const legend = new ElementBuilder("legend")
    .setTextContent(LEGEND_TEXT_CONTENT)
    .appendTo(elementProducaoDoDia)

const INPUT_ATTRIBUTES = {
    type: "number",
    name: "producaoDoDia",
    id: "producaoDoDia",
    placeholder: 'Quantidade',
    oninput: "gerarOptionTempo()"
}
const input = new ElementBuilder("input")
    .setAttributes(INPUT_ATTRIBUTES)
    .appendTo(elementProducaoDoDia)