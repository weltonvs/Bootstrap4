//console.log("Funcionando");

$("#formulario").submit(event => {
    event.preventDefault();//Almacena los datos del formulario sin refrescar el sitio web.
    enviar();
});

function enviar(){
    var datos = $("#formulario").serialize(); //Toma los datos y los lleva a un arreglo.
    //Creando el Ajax con JQuery.
    $.ajax({
        type: "post",
        url: "formulario.js",
        data: datos,
        success: function(texto){
            if(texto){
                correcto();
            } else {
                phpError();
            }
        }
    })
}

function correcto(){
    $("#mensajeExito").removeClass("d-none");
}

function phpError(){
    $("#mensajeError").removeClass("d-none");
}