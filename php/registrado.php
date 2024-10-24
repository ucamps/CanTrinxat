<?php
// Verificar si la cookie 'email' está establecida
if (!isset($_COOKIE["email"])) {
    // Redirigir al usuario a la página de inicio de sesión
    header("Location: ./login.html");
    exit;
}


// Permitir al usuario acceder a la página
?>