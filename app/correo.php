<?php

$nombre = test_input($_POST['nombre']);
$email= test_input($_POST['email']);
$telefono = test_input($_POST['telefono']);
$mensaje = test_input($_POST['mensaje']);


if (empty($nombre) ||  empty($email)  || empty($mensaje) || empty($telefono)) {
    echo json_encode('empty');
} else {
    $para = "hola@drontrc.com";
    $titulo = $nombre . ' quiere ponerse en contacto.';
    $mensaje = '
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <title></title>
    </head>
    <body>
        <h3>Nombre completo:</h3>
        <p>' . $nombre . '</p>
        <h3>email:</h3>
        <p> ' . $email.'</p>
        <h3>Teléfono:</h3>
        <p>' . $telefono . '</p>
        <h3>Mensaje:</h3>
        <p>' . ucfirst($mensaje)  . '</p>
    </body>
    </html>';

    

    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    $cabeceras .= 'Para: <hola@drontrc.com>' . "\r\n";
    $cabeceras .= 'From: ' . $nombre . "\r\n";

    $sent = mail($para, utf8_decode($titulo), utf8_decode($mensaje), $cabeceras);
    echo json_encode('captcha2');
   
}


function test_input($field)
{
    $field = trim($field);
    $field = stripslashes($field);
    $field = htmlspecialchars($field);
    return $field;
}