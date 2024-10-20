import { FIELDSET_CLASS } from "../../CONTANTES.js"
import { Component } from "../Component.js"
const FIELDSET_ATTRIBUTES = {
    class: "FIELDSET_CLASS",
    id: "elementTrocaDeFerramenta"
}
const LEGEND_TEXT_CONTENT = "段替・刃交 Troca de ferramenta/configuração:"
const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "atraso",
    id: "atraso",
    min: 0,
    max: 100,
    step: 0.01,
    value: 0
}
export const elementTrocaDeFerramenta = new Component(FIELDSET_ATTRIBUTES, LEGEND_TEXT_CONTENT, INPUT_ATTRIBUTES).getElement()