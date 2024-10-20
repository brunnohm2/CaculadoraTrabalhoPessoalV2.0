import { gerarTabela } from "../../script.js"
import { ElementBuilder } from "../ElementBuilder.js"

const BUTTON_ATTRIBUTES = {
    type: "button"
}
export const elementButtonTempoDeInatividade = new ElementBuilder("button")
    .setAttributes(BUTTON_ATTRIBUTES)
    .addEventListener('click', gerarTabela)
    .setTextContent("計算する Calcular")
    .getElement()