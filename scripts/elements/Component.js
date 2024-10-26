import { ElementBuilder } from "./ElementBuilder.js"

export class Component{
    constructor(FIELDSET_ATTRIBUTES, LEGEND_TEXT_CONTENT, INPUT_ATTRIBUTES, EVENT_LISTENER){
        this.fieldset = new ElementBuilder("fieldset")
            .setAttributes(FIELDSET_ATTRIBUTES)
        this.legend = new ElementBuilder("legend")
            .setTextContent(LEGEND_TEXT_CONTENT)

        this.input = new ElementBuilder("input")
            .setAttributes(INPUT_ATTRIBUTES)

        if (EVENT_LISTENER) {
            const {type, callback} = EVENT_LISTENER
            this.input.addEventListener(type, callback)
        }
        this.fieldset.appendChild(this.legend.getElement())
        this.fieldset.appendChild(this.input.getElement())
    }
    getElement(){
        return this.fieldset.getElement()
    }
    appendTo(parent){
        this.fieldset.appendTo(parent)
        return this
    }
}
