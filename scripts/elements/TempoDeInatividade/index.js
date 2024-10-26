import { ElementBuilder } from "../ElementBuilder.js";
import { elementAtraso } from "./elementAtraso.js";
import { elementMontagemDefeituosa } from "./elementMontagemDefeituosa.js";
import { elementParadasFrequentes } from "./elementParadasFrequentes.js";
import { elementSomaValores } from "./elementSomaValores.js";
import { elementTempoDeFalha } from "./elementTempoDeFalha.js";
import { elementTrocaDeFerramenta } from "./elementTrocaDeFerramenta.js";
import { elementValorTotal } from "./elementValorTotal.js";

const TEMPO_DE_INATIVIDADE_ATTRIBUTES = {
    class: "oculto",
    id: "TempoDeInatividade",
    name: "TempoDeInatividade"
}
export const tempoDeInatividade = new ElementBuilder("div")
    .setAttributes(TEMPO_DE_INATIVIDADE_ATTRIBUTES)
    .appendChild(elementValorTotal)
    .appendChild(elementTempoDeFalha)
    .appendChild(elementParadasFrequentes)
    .appendChild(elementMontagemDefeituosa)
    .appendChild(elementAtraso)
    .appendChild(elementTrocaDeFerramenta)
    .appendChild(elementSomaValores)
    .getElement()
