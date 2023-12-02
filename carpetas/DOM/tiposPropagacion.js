const contenedor = document.getElementById('contenedor1')

contenedor.addEventListener('click',() =>{
    console.log(`hiciste click en el contenedor`)
})

const caja1 = document.getElementById('.caja')

caja1.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log("hiciste click en caja1")
})

