<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Definir el correo donde recibirás las consultas
    $destinatario = "cristianleon20082910@gmail.com"; 
    $asunto = "Nuevo mensaje desde el formulario de contacto";

    // Sanitizar y recoger las variables del formulario
    $first_name = filter_var($_POST['first_name'] ?? '', FILTER_SANITIZE_STRING);
    $last_name  = filter_var($_POST['last_name'] ?? '', FILTER_SANITIZE_STRING);
    $email      = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone_area = filter_var($_POST['phone_area'] ?? '', FILTER_SANITIZE_STRING);
    $phone_pref = filter_var($_POST['phone_prefix'] ?? '', FILTER_SANITIZE_STRING);
    $phone_line = filter_var($_POST['phone_line'] ?? '', FILTER_SANITIZE_STRING);
    $subject    = filter_var($_POST['subject'] ?? '', FILTER_SANITIZE_STRING);
    $message    = filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING);

    // Construir el cuerpo del correo
    $contenido  = "Nombre: $nombre $apellido\n";
    $contenido .= "Email: $gmail\n";
    $contenido .= "Teléfono: ($Telefono) $celular_de_preferencia-$Linea_telefonica\n";
    $contenido .= "Asunto: $asunto\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Cabeceras del correo
    $headers  = "From: " . $gmail . "\r\n";
    $headers .= "Reply-To: " . $gmail . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "<script>alert('¡Mensaje enviado con éxito!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Error al enviar el mensaje. Inténtalo de nuevo.'); window.history.back();</script>";
    }
} else {
    header("Location: contactos.html");
    exit();
}
?>