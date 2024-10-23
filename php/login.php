  <?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    // Verificar que las contraseñas coincidan
    $correo='user@gmail.com';
    $contra='123';

      // Aquí deberías agregar la lógica para guardar el usuario en la base de datos
    // Asegúrate de hashear la contraseña


// Establecer la cookie si el usuario quiere ser recordado (opcional)
    
    if($correo == $email && $contra == $password){  
      setcookie('email', $email , time() + (86400 * 30), "/"); // Cookie válida por 30 días
    }

    // Redirigir a la página de inicio
    header("Location: ../index.html");
    exit;
}
 
?>