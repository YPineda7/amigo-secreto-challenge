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
      console.log(amigos);
      limpiarCaja;
    }
    return;
}
//funcion limpiar caja
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

agregarAmigo();
