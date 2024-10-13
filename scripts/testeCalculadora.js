import Calculadora from "./calculadora.js"

const calculadora = new Calculadora()
calculadora.producaoDoDia = 1755
calculadora.ct = 20.3
calculadora.calcularTempoLinhaIdeal()
calculadora.tempoLinhaReal = 10.92
calculadora.pecaComDefeito = 5
calculadora.calcularPecaSemDefeitoPCT()
calculadora.calcularMediaPorHora()
calculadora.calculaTempoLinhaReal()
calculadora.setTempoAcumulativoPorPessoa("turnoAtual", calculadora.tempoLinhaReal*2) 

calculadora.setPctTempoLinhaReal("turnoPassado", 92)
calculadora.setPctPecaSemDefeito("turnoPassado", 100)
calculadora.setMediaPorHora("turnoPassado", 166)
calculadora.setTempoAcumulativoPorPessoa("turnoPassado", 21.84)
calculadora.calcularTempoLinhaRealMediaDosTurnos()
calculadora.calcularPecaSemDefeitoMediaDosTurnos()
calculadora.calcularMediaPorHoraMediaDosTurnos()
calculadora.calcularTempoAcumulativoPorPessoaDosTurnos()
console.log(calculadora._dados)
console.log(calculadora._dados.tempoLinhaIdeal)
console.log(calculadora._dados.tempoLinhaIdeal)