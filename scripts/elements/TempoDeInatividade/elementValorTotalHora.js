import { FIELDSET_CLASS } from "../../CONTANTES.js"
import { Component } from "../Component.js"

const FIELDSET_ATTRIBUTES = {
    class: FIELDSET_CLASS,
    id: "elementValorTotalHora"
}
const LEGEND_TEXT_CONTENT = "Valor representado em Minutos"
const INPUT_ATTRIBUTES = {
    type: "text",
    name: "valorTotalHora",
    id: "valorTotalHora",
    disabled: ""
}
export const elementValorTotalHoras = new Component(
    FIELDSET_ATTRIBUTES,
    LEGEND_TEXT_CONTENT,
    INPUT_ATTRIBUTES
).getElement()