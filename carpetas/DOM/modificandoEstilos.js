const primeraCaja = document.querySelector('#contenedor1 .caja')

const agregarClase = () =>{
    primeraCaja.classList.add('activa')
}

const eliminarClase=() =>{
    primeraCaja.classList.remove('activa')

}

const toggleClase=() =>{
    primeraCaja.classList.toggle('activa')
}

//podemos comprobar si la clase tiene activa la clase
const comprobarClase=() =>{
    if(primeraCaja.classList.contains('activa')){
        console.log("la clase tiene la clase activa")
    }else {
        console.log("la clase no tiene la clase activa")
    }

    console.log('y contiene las siguientes clases ')
    primeraCaja.classList.forEach((clase) =>{
        console.log(clase)
    })

    
}


