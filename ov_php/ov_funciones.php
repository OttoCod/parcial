<?php
require_once 'connection.php';

function ov_procesarContacto($nombre, $email, $mensaje) {
    $conexion = ov_conectarDB();
    
    if ($conexion) {
        try {
            $sql = "INSERT INTO ov_contactos (nombre, email, mensaje, fecha) VALUES (:nombre, :email, :mensaje, NOW())";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':mensaje', $mensaje);
            return $stmt->execute();
        } catch(PDOException $e) {
            echo "Error al guardar el contacto: " . $e->getMessage();
            return false;
        }
    }
    return false;
}