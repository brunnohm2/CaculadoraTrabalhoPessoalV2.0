export const elementTempo = document.createElement("fieldset")
elementTempo.setAttribute("class", "teste")
elementTempo.setAttribute("id", "elementTempo")

const legend = document.createElement("legend")
legend.innerHTML = "Tempo:"

const select = document.createElement("select")
select.setAttribute("name", "tempo")
select.setAttribute("id", "tempo")
const option = document.createElement("option")
option.innerHTML = "Aguardando..."

select.appendChild(option)
elementTempo.appendChild(legend)
elementTempo.appendChild(select)
console.log(elementTempo)
// elementTempo.innerHTML =` 
//     <legend>Tempo:</legend>
//     <select
//         name="tempo"
//         id="tempo"
//     >
//         <option>Aguardando...</option>
//     </select>
// `