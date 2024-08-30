export default class NumberError{
    static isNumber (value, propertyName, message){
        message = this.message(message)
        if (isNaN(value)) throw new Error (`\n${message}\n${propertyName} = ${value}, não é um valor numérico\n`)
    }
    static isPositiveNumber (value, propertyName, message) {
        message = this.message(message)
        if (value < 0) throw new Error(`\n${message}\n${propertyName} = ${value}, não é um valor positivo\n`)
    }
    static message (message) {
        if (message == null) {message = "Valor inválido!"}
        return message
    }
}