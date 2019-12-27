<?php
    //$nombre = $_POST["nombre"];
    $Error = '';//Variable que devolverá el error cometido.
    // Validando el Nombre.
    if(empty($_POST["nombre"])){//Probar si al campo nombre esta vacio.
        $Error = 'Ingrese un nombre</br>';
    } else {
        //Caso de que la variable no esté vacia
        $nombre = $_POST["nombre"];
        $nombre = filter_var($nombre,FILTER_SANITIZE_STRING);//limpiar la variable de caracteres basura.
    }

    // Validando el E-mail.
    if(empty($_POST["email"])){
        $Error .= 'Ingrese el correo electronico</br>';
    } else {
        $email = $_POST["email"];
        if(!filter_var($email,FILTER_VALIDATE_EMAIL)){//Verificar si hay correo valido.
            $Error .= 'Ingrese un correo electronico válido</br>';
        } else {
            $email = filter_var($email, FILTER_SANITIZE_STRING);//Eliminar caracteres estraños.
        }
    }

    //Validando el mensaje.
    if(empty($_POST["mensaje"])){//Probar si al campo nombre esta vacio.
        $Error .= 'Ingrese un mensaje</br>';
    } else {
        //Caso de que la variable no esté vacia
        $mensaje = $_POST["mensaje"];
        $mensaje = filter_var($mensaje,FILTER_SANITIZE_STRING);//limpiar la variable de caracteres basura.
    }

    /**
     * Envio de correo desde php
     */
    //Cuerpo del mensaje
    $cuerpo = 'nombre: '.$nombre.'\n';
    $cuerpo = 'Email: '.$email.'\n';
    $cuerpo = 'Mensaje: '.$mensaje.'\n';

    //Dirección de correo.
    $EnviarA = 'weltonvs@hotmail.com';
    $Asunto = 'Mensaje de mi nuevo sitio Web.';

    //Enviar correo
    if($Error == ''){
        $success = mail($EnviarA,$Asunto,$cuerpo,'de: '.$email);
        echo 'éxito';
    } else {
        echo $Error;
    }
    

    ?>