<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
   
    // Verificar que las contraseñas coincidan
    if ($password !== $confirm_password) {
        echo "Las contraseñas no coinciden.";
        exit;
    }else{
        echo "hola";
    }

    // Hashear la contraseña
    // $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Aquí deberías agregar la lógica para guardar el usuario en la base de datos
    // Asegúrate de hashear la contraseña

    // Establecer la cookie si el usuario quiere ser recordado (opcional)
    // if (isset($_POST['remember'])) {
    //     setcookie('email', $email, time() + (86400 * 30), "/", "", true, true); // Cookie válida por 30 días
    // }

    // Redirigir a la página de inicio
    // header("Location: index.html");
    // exit;
}
 else {
    // Código para manejar solicitudes que no sean POST
    header("HTTP/1.1 405 Method Not Allowed");
    exit;
}
?>