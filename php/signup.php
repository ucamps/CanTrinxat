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
    }

    // Hashear la contraseña
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Aquí deberías agregar la lógica para guardar el usuario en la base de datos
    // Asegúrate de hashear la contraseña

    
    // Redirigir a la página de inicio
    header("Location: ../html/login.html");
    exit;
}
 
?>