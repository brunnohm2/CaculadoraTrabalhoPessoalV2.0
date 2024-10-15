import { ElementBuilder } from "./ElementBuilder.js"

const DIV_ATTRIBUTES = {
    class: "visivel",
    id: "divTabela1",
    name: "divTabela1"
}
export const elementTabela1 = new ElementBuilder("div")
    .setAttributes(DIV_ATTRIBUTES)
    .getElement()

const table = new ElementBuilder("table")
    .appendTo(elementTabela1)
    .getElement()

const tr = new ElementBuilder("tr")
    .appendTo(table)
    .getElement()
const DESCRICAO = [
    {
        numero: "②",
        japones: "生産台数 (台)",
        portugues: "Quantidade de Produção (Unidades)"
    },
    {
        numero: "③",
        japones: "生産数 × NMCT (H)",
        portugues: "Número de Unidades Produzidas × NMCT (H)"
    },
    {
        numero: "④",
        japones: "稼働時間 (H)",
        portugues: "Tempo de Funcionamento (H)"
    },
    {
        numero: "⑤",
        japones: "可動率 (%)",
        portugues: "Taxa de operação (%)"
    },
    {
        numero: "⑥",
        japones: "不良数 (台)",
        portugues: "Número de defeitos (Unidades)"
    },
    {
        numero: "⑦",
        japones: "直行率 (%)",
        portugues: "Taxa de Aceitação Direta (%)"
    },
    {
        numero: "⑧",
        japones: "H当り出来高 (台)",
        portugues: "Produção por hora (Unidades)"
    },
    {
        numero: "⑨",
        japones: "投入工数 (H)",
        portugues: "Mão de obra utilizada (H)"
    }
]

