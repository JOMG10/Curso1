const variable = 4

const metodo =() =>{
    const variable = 2
    console.log(variable)
}

const array = ["jose", "martinez","juan"]

const objeto = {
    nombre: "jose",
    apellido: "martinez",
    status :{
        dato : "activo",
        dato : "inactivo"
    },
    fun : () =>{
        console.log("realizando funcion")
    }

}


array.forEach ((nombre, i)=>{
    const cantidad = nombre.length
    if(cantidad < 5){
        console.log(`el nombre es: ${nombre} y su posicion es: ${i} y la cantidad es ${cantidad}`)
    }
   
})

const nombreS = ['jose', 'jartinez', 'jristian', 'stefania'];

//ciclo for repite un bloque de codigo miestras se cumpla la condicion


    console.log(nombreS.length);

    const invitados = ['jose', 'martinez','jorge', 'estefania', 'erika'];
console.log('lista de personas de aceptadas')

for(let i=0; i< invitados.length; i++){
    if(invitados[i] ==='jorge'){
        continue;
    }
    console.log(invitados[i]);

}
