import { ElementBuilder } from "../ElementBuilder.js";
import { elementButtonTabela1 } from "./elementButtonTabela1.js";
import { elementCT } from "./elementCT.js";
import { elementPecaComDefeito } from "./elementPecaComDefeito.js";
import { elementProducaoDoDia } from "./elementProducaoDoDia.js";
import { elementTempo } from "./elementTempo.js";

const className = "EntradaDeDados"
const idName = "EntradaDeDados"
const DIV_ATTRIBUTES = {
    class: className,
    id: idName,
    name: idName
}
export const entradaDeDadosInicial = new ElementBuilder("div")
    .setAttributes(DIV_ATTRIBUTES)
    .appendChild(elementProducaoDoDia)
    .appendChild(elementCT)
    .appendChild(elementTempo)
    .appendChild(elementPecaComDefeito)
    .appendChild(elementButtonTabela1)
    .getElement()

