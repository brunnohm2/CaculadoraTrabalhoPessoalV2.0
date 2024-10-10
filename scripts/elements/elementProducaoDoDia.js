export let elementProducaoDoDia = document.createElement("fieldset")
elementProducaoDoDia.setAttribute("class", "teste")
elementProducaoDoDia.setAttribute("id", "elementProducaoDoDia")
elementProducaoDoDia.appendChild(document.createElement("legend"))
elementProducaoDoDia.innerHTML = `
    <legend>Produção do dia:</legend>
    <input
        type =          "number"
        name =          "producaoDoDia"
        id =            "producaoDoDia"
        placeholder =   "Valor da Produção"
    >
`
