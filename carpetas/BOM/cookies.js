const crearCookie =() =>{
    document.cookie = 'nombre=jose'
}

let usuario; 

const cookies = document.cookie.split(';')

cookies.forEach =(cookie) =>{
    const propiedad = cookie.split('=')[0]
    if(propiedad === 'nombre'){
        usuario = cookie.split('=')[1]
    }
}

if(usuario){
    console.log(`hola: ${usuario}`)
}else {
    console.log("por favor inicia sesion")
}

const cerrarSesion =() =>{
    document.cookie = `nombre=`
    console.log("hasta luego")
}