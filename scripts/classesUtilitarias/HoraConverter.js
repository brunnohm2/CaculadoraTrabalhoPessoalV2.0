export class HoraConverter {
    constructor(horasDecimais) {
        this.horasDecimais = horasDecimais
    }

    // Método para fazer a conversão de decimal para horas e minutos
    converterParaHorasMinutos() {
        const horas = Math.floor(this.horasDecimais) // Parte inteira representa as horas
        const minutosDecimais = this.horasDecimais - horas // Parte decimal representa os minutos
        const minutos = Math.round(minutosDecimais * 60) // Converter para minutos

        if(horas == 0) return `${minutos} minutos`
        return `${horas} horas e ${minutos} minutos`
    }

    // Método estático para uso direto, sem precisar instanciar a classe
    static converter(horasDecimais) {
        const horas = Math.floor(horasDecimais)
        const minutosDecimais = horasDecimais - horas
        const minutos = Math.round(minutosDecimais * 60)

        if(horas == 0) return `${minutos} minutos`
        return `${horas} horas e ${minutos} minutos`
    }
}

// // Exemplos de uso:
// const converter1 = new HoraConverter(1.15)
// console.log(converter1.converterParaHorasMinutos()) // Saída: "1 horas e 9 minutos"

// // Ou utilizando o método estático:
// console.log(HoraConverter.converter(1.25)) // Saída: "1 horas e 15 minutos"
// console.log(HoraConverter.converter(1.5))  // Saída: "1 horas e 30 minutos"
// console.log(HoraConverter.converter(2.75)) // Saída: "2 horas e 45 minutos"