$.validator.setDefaults( {
    submitHandler: function () {
       alert( "Formulario Enviado!" );
    }
 });
 
 $(document).ready(function(){
    $('#signupForm').validate({
       rules: {
        nombre: {
            required: true,
            minlength: 5
          },
          fullname: {
             required: true,
             minlength: 5
          },
          comments: {
             required: true
          },
          password: {
             required: true,
             minlength: 5
          },
          email: {
             required: true,
             email: true
          },
          date:{
            required: true,
          },
       },
       messages: { 
        nombre: "Por favor ingrese su nombre",        
          fullname: {
             required: "Por favor ingresa tu apellido",
             minlength: "Tu apellido debe ser de no menos de 5 caracteres"
          },
          comments: "Por favor ingresa un comentario",
          password: {
             required: "Por favor ingresa una contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
          },
          email: "Por favor ingresa un correo válido que tenga @.com",
          date: "Por Favor Llene este campo",
       },
       errorElement: "em",
       errorPlacement: function (error, element) {
          error.addClass("help-block");
 
          if (element.prop( "type" ) === "checkbox") {
             error.insertAfter(element.parent("label") );
          } else {
             error.insertAfter(element);
          }
       },
       highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
       },
       unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
       } 
    });
 });