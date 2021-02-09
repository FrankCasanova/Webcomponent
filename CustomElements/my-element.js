const template = document.createElement('div')
template.innerHTML = `
    <style>
        .texto{
            color: red;
        }
        p{
            color: blue;
        }
    </style>
    <p class="texto">hola mundo 2</p>
    <p> texto ejemplo para la clase</p>


`


class myElement extends HTMLElement {
    constructor(){
        super()
                                                   //constructor
        this.p = document.createElement('p')
    }
    connectedCallback(){
        this.p.textContent = 'hola mundo'
        this.appendChild(this.p)                 //conected callback
        this.appendChild(template)
    }
}
customElements.define('my-element', myElement)