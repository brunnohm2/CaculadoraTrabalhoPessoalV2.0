export const elementPecaComDefeito = document.createElement("fieldset")
elementPecaComDefeito.setAttribute("class", "teste")
elementPecaComDefeito.setAttribute("id", "elementPecaComDefeito")
elementPecaComDefeito.innerHTML =`
<legend>Peça com Defeito:</legend>
    <input
        type="number"
        name="pecaComDefeito"
        id="pecaComDefeito"
        placeholder =   "Valor de Defeito"
    >
`