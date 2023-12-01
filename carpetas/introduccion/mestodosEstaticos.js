class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrarUsuario(id){
       console.log(`el usuario con el ${id} ha sido borrado`)

    }

    static registrados=1000;
}
// 
// const usuario = new Usuario('jose', 'josemartinez@gmail.com');
// usuario.borrarUsuario(1);
Usuario.borrarUsuario(1);
console.log(Usuario.registrados);
