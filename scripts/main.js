import { elementProducaoDoDia } from "./elements/elementProducaoDoDia.js"
import { elementCT } from "./elements/elementCT.js"
import { elementTempo } from "./elements/elementTempo.js"
import { elementPecaComDefeito } from "./elements/elementPecaComDefeito.js"
import { elementButtonTabela1 } from "./elements/elementButtonTabela1.js"
import { elementTabela1 } from "./elements/elementTabela1.js"

const main = document.createElement("main")
const section = document.createElement("section")
const article = document.createElement("article")


const body = document.querySelector("body")
body.appendChild(main)
main.appendChild(section)
section.appendChild(article)
article.appendChild(elementProducaoDoDia)
article.appendChild(elementCT)
article.appendChild(elementTempo)
article.appendChild(elementPecaComDefeito)
article.appendChild(elementButtonTabela1)
article.appendChild(elementTabela1)

