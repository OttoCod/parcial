<?php
function ov_conectarDB() {
    $host = "localhost";
    $usuario = "root";
    $password = "";
    $database = "ov_inmobiliaria";

    try {
        $conexion = new PDO("mysql:host=$host;dbname=$database", $usuario, $password);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conexion;
    } catch(PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
        return null;
    }
}