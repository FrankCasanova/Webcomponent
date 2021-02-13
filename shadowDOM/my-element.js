
class myElement extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'}) // esta es la caja de encapsulamiento, se manifiesta fuera
                                                   //constructor primer ciclo
        
    }
    geTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
        
        <section>
            <h2 class='title'>hola mundo</h2>
            <div>
                <p>soy mas texto de ejemplo</p>
            </div>
        </section>
        ${this.getStyles()}
        
        
        `
        return template
    }
    getStyles(){
        return `
        <style>
            h2{
                color: red;
            }
        </style>
        
        
        
        
        `
    }
    render(){
        this.shadowRoot.append(this.geTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}
customElements.define('my-element', myElement)