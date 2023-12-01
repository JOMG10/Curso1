console.log(`la ventana del navegador mide: ${window.innerWidth} px de ancho` )
console.log(`la ventana del navegador mide: ${window.innerHeight    } px de ancho` )

//window  open()

let ventana;
const abrirVentana =() =>{
   ventana = window.open('','mi nueva ventana','width=500,height=500');
   ventana.document.write(' <h1>hola escribiendo en la nueva venta </h1>')
}

const cerrarVentana = () =>{
      ventana.close();
}

//screen object
console.log(`ancho de la pantalla: ${window.screen.width}`)
console.log(`alto    de la pantalla: ${window.screen.height}`)

//----------------------window.open()