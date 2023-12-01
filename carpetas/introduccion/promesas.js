const promesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const exito = false;

        if(exito){
            resolve("la operacion tuvo exito");
        } else {
            reject ("la operacion no se realizo")
        }
    }, 4000);
})

promesa.then((mensaje) =>{
    alert(mensaje);
})

promesa.catch((mensaje) =>{
    alert(mensaje);
})  