import { calcularRange } from "../../script.js"
import { Component } from "../Component.js"
const FIELDSET_ATTRIBUTES = {
    class: "FIELDSET_CLASS",
    id: "elementMontagemDefeituosa"
}
const LEGEND_TEXT_CONTENT = "組付け不良 Montagem Defeituosa:"
const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "montagemDefeituosa",
    id: "montagemDefeituosa",
    min: 0,
    max: 100,
    step: 0.01,
    value: 0
}
const EVENT_LISTENER = {
    type: 'input', 
    callback: calcularRange
}
export const elementMontagemDefeituosa = new Component(
    FIELDSET_ATTRIBUTES, 
    LEGEND_TEXT_CONTENT, 
    INPUT_ATTRIBUTES,
    EVENT_LISTENER
).getElement()