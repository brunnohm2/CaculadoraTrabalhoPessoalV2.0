import { ElementBuilder } from "../ElementBuilder.js";
import { elementAtraso } from "./elementAtraso.js";
import { elementMontagemDefeituosa } from "./elementMontagemDefeituosa.js";
import { elementParadasFrequentes } from "./elementParadasFrequentes.js";
import { elementTempoDeFalha } from "./elementTempoDeFalha.js";
import { elementTrocaDeFerramenta } from "./elementTrocaDeFerramenta.js";

const TEMPO_DE_INATIVIDADE_ATTRIBUTES = {
    class: "TempoDeInatividade",
    id: "TempoDeInatividade",
    name: "TempoDeInatividade"
}
export const tempoDeInatividade = new ElementBuilder("div")
    .setAttributes(TEMPO_DE_INATIVIDADE_ATTRIBUTES)
    .appendChild(elementTempoDeFalha)
    .appendChild(elementParadasFrequentes)
    .appendChild(elementMontagemDefeituosa)
    .appendChild(elementAtraso)
    .appendChild(elementTrocaDeFerramenta)
    .getElement()