import { FIELDSET_CLASS_M } from "../../CONTANTES.js"
import { gerarOptionTempo } from "../../script.js"
import { Component } from "../Component.js"

const FIELDSET_ATTRIBUTES = {
    class: FIELDSET_CLASS_M,
    id: "elementProducaoDoDia"
}
const LEGEND_TEXT_CONTENT = "生産台数 Quant. Produção"
const INPUT_ATTRIBUTES = {
    type: "number",
    name: "producaoDoDia",
    id: "producaoDoDia",
    placeholder: 'Quantidade'
}
const EVENT_LISTENER = {
    type: 'input', 
    callback: gerarOptionTempo
}
export const elementProducaoDoDia = new Component(
    FIELDSET_ATTRIBUTES, 
    LEGEND_TEXT_CONTENT, 
    INPUT_ATTRIBUTES, 
    EVENT_LISTENER
).getElement()