const fetchPost = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            const post = ['Post 1', 'Post 2', 'Post 3'];
            const error = true;

            if(error){
                reject('hubo algun error al intentar obtener el post')
            }else {
                resolve(post);
            }
        }, 2000);
    })
};

const mostrarPost = async() =>{
    try{
        const post = await fetchPost();
        console.log(post)
    }catch(error){
        alert(error)
    }
}

mostrarPost();



// console.log('inicia operacion')
// 
// fetchPost().then((post)=>{
    // console.log(post)
// }).catch((error)=>{
    // console.log(error)
// });
// 
// console.log('finaliza operacion')