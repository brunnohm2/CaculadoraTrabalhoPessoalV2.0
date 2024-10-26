import { Component } from "../Component.js"
const FIELDSET_ATTRIBUTES = {
    class: "ValorTotal",
    id: "elementValorTotal"
}
const LEGEND_TEXT_CONTENT = "④ - ③:"
const  INPUT_ATTRIBUTES = {
    type: "number",
    name: "valorTotal",
    id: "valorTotal",
    disabled: ""
}
export const elementValorTotal = new Component(
    FIELDSET_ATTRIBUTES,
    LEGEND_TEXT_CONTENT,
    INPUT_ATTRIBUTES
).getElement()