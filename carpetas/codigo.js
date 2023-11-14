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
// bastick es ctrl + alt +}----IMPORTANTEEEEE
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

const boleto = 'VIP';
// let codigoAcceso;

/*  */
/* if(boleto == 'VIP'){ */
// /*     codigoAcceso = 'VIP-123-1 */23' 
/* }else { */
/*     codigoAcceso = 'regular' */
/* } */


/* const codigoAcceso = (boleto ==='VIP')? 'VIP-123-1-23' : 'REGULAR-123-122'; */
/* (boleto ==='VIP') ? console.log("tu boleto es de tipo VIP") : 'REGULAR-123-122'; */


// console.log(codigoAcceso)

//funciones ----------------------------------------------------------------------------
function mensaje(){
    //console.log("mensaje de funcion");
}
// mensaje();

/* const saludo = function(){ */
/*     //console.log("hola"); */
/* } */
/*  */
//saludo();

// -paremtros: es lo q se le manda a la funcion
//  -argumento: lo q recibe la funcion
// funcion de tipo flecha 

// const saludo = () => console.log("hola");

// parametros en funciones de tipo flecha

const saludos = (nombre = 'amigo') => {
    //console.log(`mi nombre es: ${nombre}`);
};

saludos('jose');
saludos('genaro');
saludos('juan');
saludos();

const operacion = (tipo,numero1, numero2) => {

    if(tipo=='suma'){
        // console.log(numero1+numero2);
    }else if(tipo=='resta'){
        // console.log(numero1-numero2);
    }
};

operacion('suma',2,1);
operacion('resta',5,3)


//return -----------------------------------------------------

let variable2
const operacion2 = (tipo,numero1, numero2) =>{

    if(tipo=='suma'){
        variable2 =numero1+numero2;
    }else if(tipo=='resta'){
         variable2 =numero1+numero2;    
        }

    return variable2;
};

const variable=operacion2('suma',2,1);
console.log(variable)
// operacion2('resta',5,3);
// ------------------------------------------------------
// forma numero2  


const operacion3= (tipo,numero1, numero2) => {

    if(tipo=='suma'){
        return numero1+numero2;
    }else if(tipo=='resta'){
         return numero1+numero2;    
        }

    return variable2;
};

const variable3=operacion2('suma',2,1);
console.log("asiganando el return desde el principio "+variable3)
// operacion2('resta',5,3);


//scope global son variables globales 
// podemos utilizar const, var, y let --------------------------------------------------------

var nombreVar = "jose";

const saludar =() =>{
    console.log(nombreVar);

    nombreVar= "genaro"
    console.log(`EL NUEVO NOMBRE ES : ${nombreVar}`)
}

saludar();

//scob o alcance local, son las variabvles que se crean dentro de una fincion y solo se pueden 
// acceder a eelas dentro de una funcion 

var obtener =(nombre) =>{
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);  
    
    var funcionAnidada = () =>{
        console.log(numero)
    }

    funcionAnidada();
}


obtener("jose");

//scob de tipo bloque ----------------------------------------------------------------------

const alumnos = {nombre:"jose", edad:23}

 const edades = 19;
 if(alumnos.edad >= 18){
    const accesoPermitido = true;
    if(true){
        console.log(accesoPermitido);    
    }
 }


//no usar var en variables creadas en funciones
 if(true){
    var nombreC="jose"
    //console.log(nombreC)
 }

 console.log(nombreC)//puede tener alcance ala variable q esta dentro de la funcion


//  ---------------------------- metodos para arreglos--------------------------------------

const colores2 = ["azul","rojo","negro"];

/* length nos permite conocer la cantidad de elementos de un arreglo */

//console.log(colores.length)

/*toString nos permite transfoimrmar un arreglo a una cadena de texto */

// document.body.innerHTML = colores2.toString();

 /* .join nos permite transformar un arreglo a una cadena de texto y separar cada elemento */

 console.log(colores2.join('-'));  
 
 
 /* sort() 
 nos permite ordenhar nuestro arreglo de forma alfabetica */

 const letras = ['c', 'b', 'd', 'a'];
//  console.log(letras.sort());

 const numerosOrdenados = [8,5,2,9,1,3];
//  console.log(numerosOrdenados.sort());

 /*.reverse nos permite ordenar un arreglo de forma descendente*/
 const letrasDesce = ['c', 'b', 'd', 'a']; 
//  console.log(letrasDesce.reverse());


 //-------------------------metodo .concat()--------------------


 const arreglo1 = [1,2,3];
 const arreglo2 = ["A","B","C"];
 const arreglo3 =arreglo1.concat(arreglo2);

//  console.log(arreglo3);

//.push nos permite agreagr unn elemento al final de u arreglo 

colores.push('morado');
console.log(colores);

//el metodo  .pop() nos permite eliminar el ultimo elemento de un arreglo 
colores.pop();
// console.log(colores);

//el metodo .shift  nos permite el primer elemento de un  arreglo 
const dias = ['lunes','martes','miercoles', 'jueves'];
const diaEliminado =dias.shift();
// console.log(diaEliminado)

//con .unshift agrega un elemento al iniucio del arreglo y enpuja los demas 
dias.unshift('dominngo');
// console.log(dias)

//.splice nos permite insertar a un arreglo donde le especifiquemos 
const amigos1  =['jose', 'cesar' ,'manuel'];
amigos1.splice(0,0, 'rafael','roberto');
// console.log(amigos1);


//.slice nos permite copiar una parte del arreglo a otro
const frutas = ['fresa', 'manzana', 'piña', 'mango'];
const frutasFav =frutas.slice(1,3);
// console.log(frutasFav);



//-------------metodo para arreglo .indexOf()
const nombresA = ['jose', 'rafael', 'estefania','gema','jose', 45];
// console.log( nombresA.indexOf('jose'));



//.lastIndexOf()
//console.log(nombresA.lastIndexOf('jose'));


//metodo .forEach() nos permite ejecutar una funcion poor cada elemento
nombresA.forEach((nombre, index)=>{
    //console.log(`hola: ${nombre} (${index})`)
});


//metodo .find() nos permite reccorrer un arreglo y devuelve el  rimer elemento que retornemos 

const resualtado = nombresA.find((nombre)=>{    
    if(nombre[0] === 'j'){
        return nombre;
    }
});

//console.log(resualtado);


//metodo .map() nos permite ejecutar una funcioon por cada elemento y crear un nuevo arreglo en -------
// base a los resultados de la funcion 
/*  */
/* const nombresMayusculas = nombresA.map((nombre) =>{ */
/*     return nombre.toUpperCase(); */
/* }); */

//se puede resumir el codigo anterior

//const nombresMayusculas = nombresA.map((nombre) => nombre.toUpperCase());


//console.log(nombresMayusculas);


//metodo .filter() nos permite ejecutar una funcion por cada elemento y crear un arreglo en base------------- 
// a los resultados de esa funcion 

const nombres4Letras = nombresA.filter((nombre)=> {
    if(nombre.length === 4){
        return nombre;
    }
});

//console.log(nombres4Letras);



//metodo de .includes() nos permite saber si el arreglo contiene un elemento especificado 

// console.log(nombresA.includes('carlos')); 

//metodo de .every nos permite ejecutar un condicional sobre cada elemento y nos devuelve true
// si todos los elementos nos cumplieron la condicion 
/* const nombresValidos = nombresA.every ((nombre) =>  { */
/*     if(typeof nombre ==='string'){ */
/*         return true; */
/*     }else { */
/*         return false; */
/*     } */
/* }) */

// console.log(`todos los elementos son validos? : ${nombresValidos}`);

//metodo de .some() nos permite ejecutar una condicional sobre cada elemento y ----/
// nos devuelve true si algun // elemento cumplio la condicion 

const nombresValidos = nombresA.some ((nombre) =>  {
    if(typeof nombre ==='string'){
        return true;    
    }else {
        return false;
    } 
})

//console.log(`todos los elementos son validos? : ${nombresValidos}`);
//true si hay un valor invalido
//false si no hay algun valor iunvalido

const usuarioO = {
    nombre : 'jose',
    edad : 23,
    amigos : ['angel', 'cesar', 'manuel'],
    saludo : () => {
        console.log("hola");
    }
}

//metodos propios  los objetos pueden tener metodos personalizados --------/
//usuario.saludo();

//Object.keys() --nos devuelve un arreglo que contiene las llaves (keys) del objeto------/

const resultados = Object.keys(usuarioO);
//console.log(resualtados);


//Object.values()  --nos devuelve un arreglo con los valores del objeto

const resultadosV = Object.values(usuarioO);
// console.log(resultadosV);

//object.entries()
//nos devuelve un arreglo con las parejas de clave y el valor del objeto 

const resultadosE = Object.entries(usuarioO);
console.log(resultadosE);

//console.log(`el objeto tiene ${resultadosE.length} propiedades`);

//---------------------------------METODOS PARA STRING------------------------------------
//.length devuelve el numero de caracteres de una cadena de texto 
const texto = 'hola soy jose';
//console.log(texto.length);

//.indexOf()  .lastIndexOf()   -Devuelve el index del primer/ ultimoo caracter especificado 
console.log(texto.indexOf('o'));
console.log(texto.lastIndexOf('o'));

//.slice() -devuelve el fracmento de una cadena de texto 
/* primer parametro:  index desde donde queremos cortar  */
/* segundo parametro (opcional) - index hasta donde queremos cortar  */

const textoN = 'hola soy ganaro';
// const index = textoN.indexOf('g');
// const lastIndex = textoN.lastIndexOf('o');
// console.log(textoN.slice(index, lastIndex+1 ));
// const lastIndex = textoN.slice(-6, -2);

//.replace()   -devuelve una cadena de texto en donde remplaza un valor ppor otro 

const textoR = 'hola soy genaro';
console.log(textoR.replace('genaro', 'jose'));

//.split()  --convierte una cadena de texto en un arreglo, tenemos quer esepcificar donde cortar cada elemento 

console.log(textoN.split(' '));


//metodo .toUpperCase() devuelve una cadena de texto en mayusculas -- .toLowerCase() er minusculas

const textoMayusculas= texto.toUpperCase();
const textoMinusculas= texto.toLowerCase();


//--------------------------------------METODOS PARA NUMEROS--------------------------
//metodo .toString 
const numeroS = 10;
console.log(numeroS, typeof numeroS);
const textoS = numeroS.toString();
console.log(textoS, typeof textoS);


//metodo .toFixed()
//permite obtener un numero con la cantidad de decimales especificados 
const pi= 3.1416
console.log(pi.toFixed(1));

//metodo parseInt() intenta transformar un valor a un entero
// const numero5 =  parseInt(prompt('Escribe un numero'));
// const numero6 =  parseInt(prompt('Escribe un numero'));
// 
// console.log(numero5 + numero6)
// 
// 
// metodo parseFloat() intenta transformar un valor a un decimal 
// const numero7 =  parseFloat(prompt('Escribe un numero'));
// const numero8 =  parseFloat(prompt('Escribe un numero'));
// 
// const suma = numero7 +numero8 ;
// 
// console.log(numero7 + numero8); 

//Math.random()  genera un numnero al azar entre 0 y 1
const numeroM = Math.random();

//Math.floor() --este metodo redondea un numero hacia abajo 
// console.log(Math.floor(suma));
// 
// Math.ceil() redondea un numero hacia arriba 
// console.log (Math.ceil(suma));
// 

//metodo Math.round() redondea al numero mas cercano 
console.log(Math.round(11.999));  


// ---------------------OPERADOR DE TIPO SPREAD------------------------------
//PERMITE TOMAR LOS ELEMENTOS DE UN ARREGLO U OBJETO Y EXPANDIRLOS A OTRO SITIO

const comidaFavorita = ['pizza', 'sushi',...frutas];

const datosLogin = {
    correo: 'jose@gmail.com',
    password: '123'
}

const Usuario = {
    nombre:'jose',
    ...datosLogin,
    edad: 23
}


// console.log(Usuario);

//--------------------------PARAMETROS RES-------------------
//permite q una funcion contenga un numero indefinido de argumentos.
//los argumentos extra que encuentre los convertira en un arreglo 

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    //console.log(nombre,correo, datosAdicionales)
}

registrarUsuario('jose', 'josemartinez@gmail.com');
registrarUsuario('jose', 'josemartinez@gmail.com', 28, 'mexico');


//----------------------------------DESTRUCTURACION DE OBJETOS --------------------------
//NOS PERMITE OBTENER LOS ELEMENTOS O PROPIEDADES DDE UN ARREGLO U OBJETO Y GUARDARLOS EN UNA VARIABLE 

const primerAmigo = amigos[0];
const segundoAmigo = amigos[1];

const [primerA,segundoA, tercerA] = amigos;

// console.log(segundoA);

const personas ={
    nombreP: 'jose',
    edad:23,
    pais: 'mexico'
}

const {nombreP, pais} = personas;
// console.log(nombreP, pais);

const mostrarEdad = (nombre,edad) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad(nombreP, edad);



//--------------------------------CICLO FOR -------------------------
const nombreS = ['jose', 'jartinez', 'jristian', 'stefania'];
nombreS.forEach((nombreS) => {
    console.log(nombreS);
})

//ciclo for repite un bloque de codigo miestras se cumpla la condicion

for(let numero = 50; numero >0 ; numero-- ){
    console.log(numero)
}


for(let numero = 0; numero < nombreS.length ; numero++ ){
    console.log(nombreS[numero]);
}

//sentencia break:-------------
for(let i = 0; i <nombreS.length; i++){
    if(nombreS[i][0] !== 'j'){
        console.log(nombreS[i] + ' este nombre no empieza con la letra j')
        break;
    }

    console.log(nombreS[i]);
}


//--------------------SENTENCIA DE CONTINUE-----------------------------
const invitados = ['jose', 'martinez','jorge', 'estefania', 'erika'];
console.log('lista de personas de aceptadas')

for(let i=0; i< invitados.length; i++){
    if(invitados[i] ==='jorge'){
        continue;
    }
    console.log(invitados[i]);

}


//---------------------ciclo while---------------------------------------
let contador = 0;
while(true){ 
    console.log(contador++)
}