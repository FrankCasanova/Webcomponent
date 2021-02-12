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
                                                   //constructor primer ciclo
        this.p = document.createElement('p')
    }
    connectedCallback(){
        this.p.textContent = 'hola mundo'
        this.append(this.p)                 //conected callback segundo ciclo
        this.append(template)
    }
}
customElements.define('my-element', myElement)