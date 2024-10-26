import { calcularRange } from "../../script.js"
import { Component } from "../Component.js"
const FIELDSET_ATTRIBUTES = {
    class: "FIELDSET_CLASS",
    id: "elementTempoDeFalha"
}
const LEGEND_TEXT_CONTENT = "故障時間 Tempo de Falha:"
const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "tempoDeFalha",
    id: "tempoDeFalha",
    min: 0,
    max: 100,
    step: 0.01,
    value: 0
}
const EVENT_LISTENER = {
    type: 'input', 
    callback: calcularRange
}
export const elementTempoDeFalha = new Component(
    FIELDSET_ATTRIBUTES,
    LEGEND_TEXT_CONTENT,
    INPUT_ATTRIBUTES,
    EVENT_LISTENER
).getElement()