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