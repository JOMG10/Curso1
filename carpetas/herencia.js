class Usuario {
    constructor (usuario, password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPosts(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Moderador extends Usuario{

    constructor(usuario, password, permisos){
        super(usuario,password);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`el post con el ${id} ha sido borrado`);
        }else {
            console.log('no tienes los permisos para borrar ')
        }
    }

}

const usuario = new Usuario('jose', '123');
console.log(usuario.obtenerPosts());

const usuario2 =new Moderador('arturo', '124', ['borrar', 'editar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);