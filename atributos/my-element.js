class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }) // esta es la caja de encapsulamiento, se manifiesta fuera
            //constructor primer ciclo
        this.title = this.getAttribute('title')
        this.parrafo = this.getAttribute('parrafo')
        this.img = this.getAttribute('img')
    }
    geTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        

        <section>
            <h2>
                ${this.title}
            </h2>
        </section>
        <div>
            <p>${this.parrafo}</p>
            <img src=${this.img}/>
                
            
        </div>
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