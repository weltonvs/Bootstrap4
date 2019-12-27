//console.log("Funcionando");

$("#formulario").submit(function(event) {
    event.preventDefault();//Almacena los datos del formulario sin refrescar el sitio web.
    enviar();
});

function enviar(){
    var datos = $("#formulario").serialize(); //Toma los datos y los lleva a un arreglo.
    //Creando el Ajax con JQuery.
    $.ajax({
        type: "post",
        url: "formulario.php",
        data: datos,
        success: function(texto){
            if(texto == "exito"){
                correcto();
            } else {
                phpError(texto);
            }
        }
    });
}

function correcto(){
    $("#mensajeExito").removeClass("d-none");
}

function phpError(texto){
    $("#mensajeError").removeClass("d-none");
    $("#mensajeError").html(texto);
}