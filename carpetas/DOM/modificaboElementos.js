//elemento.innnerHTML

const primerCaja = document.querySelector('.caja')
primerCaja.innerHTML = 'hola'

//elemento.atribute

primerCaja.id = 'nuevo-id'

//elemento.setAyribute()
primerCaja.setAttribute('class', 'caja activa')
primerCaja.setAttribute('data-id', '123-456')

//Element.style.property
const contenedor2 =  document.querySelector('#contenedor2 .caja')
contenedor2.style.background = 'black'
contenedor2.style.color = 'white'