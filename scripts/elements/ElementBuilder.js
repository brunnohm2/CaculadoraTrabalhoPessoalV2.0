/**
 * Classe ElementBuilder
 * 
 * Esta classe facilita a criação e manipulação de elementos HTML.
 * Ela permite configurar atributos, definir conteúdo de texto e anexar elementos ao DOM de maneira mais fluida.
 * 
 * Métodos:
 * - constructor(tagName): Cria um novo elemento com a tag especificada.
 * - setAttributes(attributes): Define múltiplos atributos para o elemento.
 * - setTextContent(text): Define o conteúdo de texto do elemento.
 * - appendTo(parent): Anexa o elemento ao elemento pai especificado.
 * - getElement(): Retorna o elemento criado.
 */
export class ElementBuilder {
    constructor(tagName) {
        this.element = document.createElement(tagName)
    }
  
    /**
     * Define múltiplos atributos para o elemento.
     * @param {Object} attributes - Um objeto contendo pares chave-valor dos atributos a serem definidos.
     * @returns {ElementBuilder} - Retorna a própria instância para permitir encadeamento.
     */
    setAttributes(attributes) {
        for (let key in attributes) {
            this.element.setAttribute(key, attributes[key])
        }
        return this
    }
  
    /**
     * Define o conteúdo de texto do elemento.
     * @param {string} text - O conteúdo de texto a ser definido.
     * @returns {ElementBuilder} - Retorna a própria instância para permitir encadeamento.
     */
    setTextContent(text) {
        this.element.textContent = text
        return this
    }
  
    /**
     * Anexa o elemento ao elemento pai especificado.
     * @param {HTMLElement} parent - O elemento pai ao qual anexar o elemento criado.
     * @returns {ElementBuilder} - Retorna a própria instância para permitir encadeamento.
     */
    appendTo(parent) {
        parent.appendChild(this.element)
        return this
    }
  
    /**
     * Retorna o elemento criado.
     * @returns {HTMLElement} - O elemento HTML criado.
     */
    getElement() {
        return this.element
    }
}