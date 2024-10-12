import { ElementBuilder } from "./ElementBuilder.js"

export const elementProducaoDoDia = new ElementBuilder("fieldset")
    .setAttributes({ class:"teste", id: "producaoDoDiaFieldset" })
    .getElement()

export const legend = new ElementBuilder("legend")
    .setTextContent("Produção do dia:")
    .appendTo(elementProducaoDoDia)

export const input = new ElementBuilder("input")
    .setAttributes({ type: "number", name: "producaoDoDia", id: "producaoDoDia", placeholder: "Valor da Produção" })
    .appendTo(elementProducaoDoDia)