import Calculadora from "./calculadora.js"

const calculadora = new Calculadora()
calculadora.valorProducaoDia = 1755
calculadora.ct = 20.3
calculadora.calcularTempoLinhaAbsoluto()
calculadora.tempoLinhaReal = 10.92
calculadora.valorPecaDefeito = 5
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
console.log(calculadora._dados.tempoLinhaAbsoluto)
console.log(calculadora._dados.tempoLinhaAbsoluto)