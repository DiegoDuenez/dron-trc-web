function enviar() {

    var response = grecaptcha.getResponse();
    if (response.length != 0) {

        const nombre = $("#nombre").val()
        const telefono = $("#telefono").val()
        const proyecto = $("#proyecto").val()
        const mensaje = $("textarea#mensaje").val()

        if(nombre != "" && proyecto != "" && mensaje != "" && telefono != ""){
            $.ajax({
                url: 'app/correo.php',
                type: 'post',
                data: {'nombre': nombre, 'proyecto': proyecto, 'telefono': telefono, 'mensaje': mensaje},
                dataType: 'text',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    $("#nombre").val('')
                    $("#telefono").val('')
                    $("#proyecto").val('')
                    $("textarea#mensaje").val('')
                    document.getElementById('status').innerHTML = "";
                    Swal.fire(
                        {
                        title: "Gracias por enviarnos tu proyecto",
                        text: "Espera nuestra respuesta pronto",
                        icon: 'success',
                        confirmButtonText: "Ok",
                        iconColor: '#323031',
                        confirmButtonColor: "#323031",
                        }
                    )
                
                },
                error: function(xhr, status, error) {
                    $("#nombre").val('')
                    $("#proyecto").val('')
                    $("#telefono").val('')
                    $("textarea#mensaje").val('')
                    document.getElementById('status').innerHTML = "";
                    
                }
            });
        }
        else{
            Swal.fire(
                {
                title: "Fallo al enviar email",
                text: "Debes de llenar todos los campos",
                icon: 'error',
                confirmButtonText: "Ok",
                iconColor: 'red',
                confirmButtonColor: "red",
                }
            )
        }
        

    }
            
    else {
        document.getElementById('status').innerHTML = "¡Debes aceptar el captcha!";
    }

    
}