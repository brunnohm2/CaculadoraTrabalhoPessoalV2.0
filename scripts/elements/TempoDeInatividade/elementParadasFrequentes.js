import { calcularRange } from "../../script.js";
import { Component } from "../Component.js";
const FIELDSET_ATTRIBUTES = {
    class: "FIELDSET_CLASS",
    id: "elementParadasFrequentes"
}
const LEGEND_TEXT_CONTENT = "頻発停止 Paradas Frequentes:"
const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "paradasFrequentes",
    id: "paradasFrequentes",
    min: 0,
    max: 100,
    step: 0.01,
    value: 0
}
const EVENT_LISTENER = {
    type: 'input', 
    callback: calcularRange
}
export const elementParadasFrequentes = new Component(
    FIELDSET_ATTRIBUTES,
    LEGEND_TEXT_CONTENT,
    INPUT_ATTRIBUTES,
    EVENT_LISTENER
).getElement()