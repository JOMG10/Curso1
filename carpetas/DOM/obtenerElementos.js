// const contenedor1 = document.getElementById('contenedor1')

// //children 

// console.log(contenedor1.children)

// //contenedor padre
// console.log(contenedor1.parentElem ent)

//obtener elementos en base a su etiqueta

const divs =  document.getElementsByTagName('div')
console.log(divs)

//obtener por medio nde clase

const contenedores = document.getElementsByClassName('contenedor')

//
const caja = document.querySelector('#contenedor1 .caja')
console.log(caja)

//seleccionar todos los elementos q coincidad con el selector
const cajas = document.querySelectorAll('#contenedor1 .caja')
console.log(cajas)   

cajas.forEach((caja) =>{
    console.log(caja)
})


//closest
const ultimaCaja= document.querySelector('.caja:last-child')
console.log(ultimaCaja)
console.log(ultimaCaja.closest('.contenedor-principal'))