const agregarCaja = () =>{
    //crear un elemento
    const nuevaCaja = document.createElement('div');

    //agregamos el texto q va a tener la caja
    nuevaCaja.innerText = 'nueva caja';
   // nuevaCaja.setAttribute('id', 'nuevo id')
    nuevaCaja.setAttribute('class', 'caja activa')

    //agregamos el elemento al dom 
    const contenedor = document.getElementById('contenedor1')

    //.appendChild() --agrega un elemento al final 
    // contenedor.appendChild(nuevaCaja)

    //insert anjanceElement ()
    //afterbegin -como primer elemento
    //beforebegin - antes del elemnto padre 
    //beforeend -como ultimo elemento 
    //afterend - despues del elemento padre 
    contenedor.insertAdjacentElement('beforebegin', nuevaCaja)

    //.replaceWith -nos permite remplazar el elemento por otro
    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
}