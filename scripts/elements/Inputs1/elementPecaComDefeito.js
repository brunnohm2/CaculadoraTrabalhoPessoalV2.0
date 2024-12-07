import { FIELDSET_CLASS_M } from "../../CONTANTES.js"
import { Component } from "../Component.js"

const FIELDSET_ATTRIBUTES = {
    class: FIELDSET_CLASS_M,
    id: "elementPecaComDefeito"
}
const LEGEND_TEXT_CONTENT = "不良数 Peça com Defeito:"
const INPUT_ATTRIBUTES = {
    type: "number",
    name: "pecaComDefeito",
    id: "pecaComDefeito",
    placeholder: "Valor de Defeito"
}
export const elementPecaComDefeito = new Component(
    FIELDSET_ATTRIBUTES, 
    LEGEND_TEXT_CONTENT, 
    INPUT_ATTRIBUTES
).getElement()