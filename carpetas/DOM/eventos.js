const boton1 = document.getElementById('boton1')
const primeraCaja = document.querySelector('.caja')

boton1.addEventListener('click', (e) =>{
    primeraCaja.classList.toggle('activa')
})


//agregando el evento a multiples elementos
const cajas = document.querySelectorAll('.caja')

cajas.forEach((caja)=>{
    caja.addEventListener('click', (e) =>{
        console.log("has hecho click en la: " + e.target.innerHTML)
    })
})