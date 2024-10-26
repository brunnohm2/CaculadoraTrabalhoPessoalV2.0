import { Component } from "../Component.js"

const FIELDSET_ATTRIBUTES = {
    class: "somaValores",
    id: "somaValores"
}
const LEGEND_TEXT_CONTENT = "Valor Restante"
const INPUT_ATTRIBUTES = {
    type: "number",
    name: "valorSoma",
    id: "valorSoma",
    disabled: ""
}

export const elementSomaValores = new Component (
    FIELDSET_ATTRIBUTES,
    LEGEND_TEXT_CONTENT,
    INPUT_ATTRIBUTES,
).getElement()