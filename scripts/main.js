import { elementTabela1 } from "./elements/Tabela1/elementTabela1.js"
import { entradaDeDadosInicial } from "./elements/Inputs1/index.js"
import { tempoDeInatividade } from "./elements/TempoDeInatividade/index.js"


const main = document.createElement("main")
const section = document.createElement("section")
const article = document.createElement("article")


const body = document.querySelector("body")
body.appendChild(main)
main.appendChild(section)
section.appendChild(article)
article.appendChild(entradaDeDadosInicial)
article.appendChild(elementTabela1)
article.appendChild(tempoDeInatividade)


