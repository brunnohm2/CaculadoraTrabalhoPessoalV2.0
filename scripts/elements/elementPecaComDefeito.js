import { ElementBuilder } from "./ElementBuilder.js"
const CLASSE = "teste"
const ID = "elementPecaComDefeito"
const LEGENDA = "Peça com Defeito:"
const PLACEHOLDER = "Valor de Defeito"

export const elementPecaComDefeito = new ElementBuilder("fieldset")
    .setAttributes({class: CLASSE, id: ID })
    .getElement()

export const legend = new ElementBuilder("legend")
    .setTextContent(LEGENDA)
    .appendTo(elementPecaComDefeito)

export const input = new ElementBuilder("input")
    .setAttributes({ type: "number", name: "pecaComDefeito", id: "pecaComDefeito", placeholder: PLACEHOLDER })
    .appendTo(elementPecaComDefeito)