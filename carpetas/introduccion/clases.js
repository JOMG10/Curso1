class Usuario{
    tipo='usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('nuevo usuario registrado   ')
    }

    obtenerNombreCompleto(){
        console.log('obteniendo datos')
        return `${this.nombre} ${this.apellido}`
    }
}

const usuario = new Usuario ('genaro','jose');
const tipo = usuario.tipo;
const nombreCompleto = usuario.obtenerNombreCompleto();
console.log(nombreCompleto);

//const usuario2 = new Usuario ('genaro','jose');

// Usuario objUsuario = new Usuario();