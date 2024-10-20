import { FIELDSET_CLASS } from "../../CONTANTES.js";
import { ElementBuilder } from "../ElementBuilder.js";

const FIELDSET_ATTRIBUTES = {
    class: FIELDSET_CLASS,
    id: "elementTempo"
}

export const elementTempo = new ElementBuilder("fieldset")
    .setAttributes(FIELDSET_ATTRIBUTES)
    .getElement()

const legend = new ElementBuilder ("legend")
    .setTextContent("稼働時間 (H) Tempo:")
    .appendTo(elementTempo)

const SELECT_ATTRIBUTES = {
    class: "SelectClass",
    name: "tempoLinhaReal",
    id: "tempoLinhaReal"

}
const select = new ElementBuilder("select")
    .setAttributes(SELECT_ATTRIBUTES)
    .appendTo(elementTempo)
    .getElement()

const option = new ElementBuilder("option")
    .setTextContent("Aguardando...")
    .appendTo(select)