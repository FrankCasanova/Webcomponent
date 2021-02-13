
class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }) // esta es la caja de encapsulamiento, se manifiesta fuera
        //constructor primer ciclo

    }
    geTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        
        <section>
            <h2>
                <slot></slot>
            </h2>
        </section>
        ${this.getStyles()}
        
        
        `
        return template
    }
    getStyles() {
        return `
        <style>
            h2{
                color: red;
            }
        </style>
        
        
        
        
        `
    }
    render() {
        this.shadowRoot.append(this.geTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('my-element', myElement)