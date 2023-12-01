//window.setTimeOut()

const saludo = () =>{
    console.log("hola mubndo")
}

let id;

const saludar=() =>{
    console.log("iniciando timer")

    const id = setTimeout(() => {
        saludo()
    }, 4000);
}

const parar=() =>{
    console.log("parando timer")
    alert(parando)
    clearTimeout(id);
}
let cuenta= 0
let i;

const iniciar = () =>{
    i = setInterval(()=>{
        console.log(cuenta)
        cuenta++
       },1000)
}

const para=() =>{
    console.log("parando")
    clearInterval(i)
}