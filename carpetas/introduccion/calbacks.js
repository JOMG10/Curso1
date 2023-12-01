const obtenerPostsUsuario = (usuario, calback) =>{
    console.log(`Obteniendo los post de ${usuario}...`);

    setTimeout(() => {
        let posts = ['post1', 'post2', 'post3'];
        calback(posts);
    }, 2000);
}

obtenerPostsUsuario('jose', (post) => {
    console.log(post);
});