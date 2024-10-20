import { FIELDSET_CLASS } from "../../CONTANTES.js"
import { Component } from "../Component.js"
const FIELDSET_ATTRIBUTES = {
    class: "FIELDSET_CLASS",
    id: "elementAtraso"
}
const LEGEND_TEXT_CONTENT = "遅れ Atraso:"
const  INPUT_ATTRIBUTES = {
    type: "range",
    name: "atraso",
    id: "atraso",
    min: 0,
    max: 100
}
export const elementAtraso = new Component(FIELDSET_ATTRIBUTES, LEGEND_TEXT_CONTENT, INPUT_ATTRIBUTES).getElement()