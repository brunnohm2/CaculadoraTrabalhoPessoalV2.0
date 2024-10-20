import { gerarTabela } from "../../script.js"
import { ElementBuilder } from "../ElementBuilder.js"
//import { gerarTabela } from "../../script.js"
const BUTTON_ATTRIBUTES = {
    type: "button"
}
export const elementButtonTabela1 = new ElementBuilder("button")
    .setAttributes(BUTTON_ATTRIBUTES)
    .addEventListener('click', gerarTabela)
    .setTextContent("計算する Calcular")
    .getElement()