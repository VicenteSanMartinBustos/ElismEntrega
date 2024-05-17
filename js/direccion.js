$(document).ready(function() {
    $("button[type='submit']").click(function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener los valores 
        var email = $("#email").val().trim();
        var nombre = $("#nombre").val().trim();
        var apellido = $("#apellido").val().trim();
        var direccion = $("#direccion").val().trim();
        var comuna = $("#comuna").val().trim();

        // Validar cada campo
        var isValid = true;

        if (!validateEmail(email)) {
            isValid = false;
            $("#email").addClass("is-invalid");
        } else {
            $("#email").removeClass("is-invalid");
        }

        if (nombre === "") {
            isValid = false;
            $("#nombre").addClass("is-invalid");
        } else {
            $("#nombre").removeClass("is-invalid");
        }

        if (apellido === "") {
            isValid = false;
            $("#apellido").addClass("is-invalid");
        } else {
            $("#apellido").removeClass("is-invalid");
        }

        if (direccion === "") {
            isValid = false;
            $("#direccion").addClass("is-invalid");
        } else {
            $("#direccion").removeClass("is-invalid");
        }

        if (comuna === "") {
            isValid = false;
            $("#comuna").addClass("is-invalid");
        } else {
            $("#comuna").removeClass("is-invalid");
        }

        if (isValid) {
            console.log("Email:", email);
            console.log("Nombre:", nombre);
            console.log("Apellido:", apellido);
            console.log("Dirección:", direccion);
            console.log("Comuna:", comuna);
            alert("guardado.  :)");

            $("#email").val('');
            $("#nombre").val('');
            $("#apellido").val('');
            $("#direccion").val('');
            $("#comuna").val('');
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});