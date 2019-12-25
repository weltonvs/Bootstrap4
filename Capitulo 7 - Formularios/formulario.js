//console.log("Funcionando");

$("#formulario").submit(event => {
    event.preventDefault();//Almacena los datos del formulario sin refrescar el sitio web.
    enviar();
});

function enviar(){
    console.log("Enviado perfectamente");
}