const numero = 4;




//operador ternario
const resultado=7 > 10? 'el primer valor es mayor q el segundo ': 'el segundo valor es mayor que le primero';

//operadores logicos
/* &&  And
||   OR
 !  NOT */

 const nombre= "Jose";
 const edad = 23
 const entrada = true;

 const permitirEntrada= edad >= 18 && entrada;

 function mensaje( ){
    document.write(permitirEntrada);
}

//areglos--------------------------------------------------

//propiedad length: sirve para acceder alas propiedad de los valores de la variable
//funcion push sirve para agregar un elemento al final del arreglo 

const arreglo= [ "nombre","apellidos", "edad",
{nombre:"jose", edad:24}
]

const amigos=["jose","martinez","genaro"];

const colores=[""];
colores[0]="rojo";
colores[1]="azul"

colores.push("verde");

//objetos ------------------------------------------------------------------

const personaArreglo=["jose", 23, "correo@gmail.com", true];

const persona ={
    nombre: "jose",
    edad: 23,
    apellido:"martinez",
    correo: "josemartinezgenaro5@gmail.com",
    suscripciones:{
        Web:true,
        correo: true
    },
    coloresFavoritos:["negro","azul"],
    saludo: function(){
        alert("saludo de la persona")
    },

};


/* console.log(persona.nombre); */
/* console.log(persona['edad']); */
/*  */
/* const variable="correo"; */
/* console.log(persona[variable]); */
/*  */
/* //console.log(persona.suscripciones.correo) */
/*  */
/* persona.pais = 'Mexico'; */
/*  */
/* console.log(persona); */
/* persona.saludo(); */
/*  */

//templates strings
// bastick es ctrl + alt +}
const nombres="jose";
const edads = 24;

/* console.log("la persona se llama:   "+nombre + "y su edad :" +edad) */
/* console.log('la persona es de nombre: ${nombre}') */
/*  */
/* console.log(`wl nombre es : ${nombre}`); */
/*  */


// condicionales ---------------------------------------------------

// if(true)

const usuario= {
    edad:23,
    pais:"argentina",
    ticket: true,
};

/* if(usuario.edad > 18){ */
/*     console.log('es mayor de edad'); */
/* }else{ */
/*     console.log('el usuario es menor de edad'); */
/* } */
/*  */

/* if((usuario.edad > 18) && (usuario.ticket)){ */
/*     console.log('el usuario si puede entrar '); */
/* }else{ */
/*     console.log("el usuario no puede entrar ") */
/* } */
/*  */

// anidando condicionales--------------------

/* if(usuario.edad >=18){ */
/*     if(usuario.ticket){ */
/*         console.log("el usuario es mayor de edad y si tiene un ticket"); */
/*     }else{ */
/*         console.log("el usuario si es mayor de edad pero no tiene un ticket"); */
/*     } */
/* }else { */
/*     console.log("el usuario no es mayor de edad"); */
/* } */

/* if(usuario.pais ==='Mexico'){ */
/*     console.log("el usuario es mexicano"); */
/* }else if(usuario.pais ==='colombia'){ */
/*     console.log("el usuario es colombiano") */
/* }else if(usuario.pais ==='españa'){ */
/*     console.log("el usuario es español") */
/* }else { */
/*     console.log("el usuario no es de ningun pais de los anteriores") */
/* } */
/*  */


// switch -----------------------------------------------------------------------------
const usuarios ={
    nombre:"jose",
    pais:"brazil"
};
/*  */
/* switch(usuarios.pais){ */
/*     case 'mexico': */
/*         console.log("el usuario es mexicano"); */
/*         break; */
/*      */
/*     case 'españa': */
/*     console.log("el usuario es español"); */
/*         break; */
/*  */
/*     case 'argentina': */
/*     console.log("el usuario es argentino"); */
/*         break; */
/*      */
/*     default: */
/*         console.log("el usuario es de otro pais "); */
/*  */
/* } */
/*  */
/*  */


//operador ternario------------------------------------------