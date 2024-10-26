import { DESCRICAO_TABELA_1 } from "../../CONTANTES.js"
import { ElementBuilder } from "../ElementBuilder.js"

const TABLE_ATTRIBUTES = {
    class: "oculto",
    id: "divTabela1",
    name: "divTabela1"
}

export const elementTabela1 = new ElementBuilder("table")
    .setAttributes(TABLE_ATTRIBUTES)
    .getElement()

for(const {id, numero, japones, portugues} of DESCRICAO_TABELA_1){
    const tr = new ElementBuilder("tr")
        .appendTo(elementTabela1)
        .getElement()

    const tdDescricao = new ElementBuilder("td")
        .setTextContent(`${numero} ${japones} ${portugues}`)
        .appendTo(tr)
        
    const tdValues = new ElementBuilder("td")
        .setTextContent("")
        .setAttributes({id: `${id}`})
        .appendTo(tr)
}