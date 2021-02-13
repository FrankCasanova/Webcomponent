// vamos a crear la estructura básica de web component
class MyCustomeElement extends HTMLElement{
    //primer ciclo de vida, el constructor
    //aún no existe en el DOM
    constructor(){
        super()
        console.log('hola desde el constructor - MEMORIA')
    }
    connectedCallback(){
        console.log('hola desde el DOM') //ingresa el elemento en el DOM
    }
    disconnectedCallback(){
        console.log('adiós desde el DOM') //retira el elemento del DOM
    }
}

customElements.define('my-custome-element', MyCustomeElement)

document.querySelector('my-custome-element').remove()