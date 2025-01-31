// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion para recibir el nombre funcionando 
function agregarAmigo(){
    let amigosNombre = document.getElementById('amigo').value;
    //validando entrada
    if(amigosNombre === ''){
        alert('Por favor inserte un nombre');
    }else{
        //Agregar con un push nombres al array
        amigos.push(amigosNombre);
        agregarALista();
     
    }
    limpiarCaja('amigo');
    return;
}
//funcion limpiar caja
function limpiarCaja(elemento){
    document.getElementById(elemento).value = '';
}

//agrega elementos en li
function agregarALista() {
    let lista = document.getElementById('listaAmigos');
    //limpiamos para que no haya duplicados
    lista.innerHTML ='';
    //bucle para seguir preguntando nombres
    for(let i =0 ;i < amigos.length; i++){
    let elementoListaHTML = document.createElement('li');
    elementoListaHTML.textContent = amigos[i];
    lista.appendChild(elementoListaHTML);
    }
}




