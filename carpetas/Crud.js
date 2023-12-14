// const boton = document.getElementById('boton');

// boton.addEventListener('click',(e)=>{
//     e.preventDefault()
//    // console.log(document.forms['formulario']['correo'].value)
//     const correo = document.querySelector('#correo').value
//     const prueba =  document.getElementById('correo').value

//     console.log(prueba)
// })

const boton1 = document.getElementById('calcular')
boton1.addEventListener('click', (e) =>{
    e.preventDefault()
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
   
    const calcularSuma = numero1 + numero2     

    console.log(calcularSuma)




})