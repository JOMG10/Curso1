//
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child')

ultimaCaja.style.background = 'black'
ultimaCaja.style.color = 'white'

const cajas = document.querySelectorAll('.caja')
let tamaño = 24;

const incrementarFuente = () => {
    cajas.forEach ((caja)=>{
        tamaño++
        caja.style.fontSize = `${tamaño}px`
    })
}

const disminuiFuente = () => {
    cajas.forEach ((caja)=>{
        tamaño--    
        caja.style.fontSize = `${tamaño}px`
    })
}   