
CREATE DATABASE IF NOT EXISTS ov_inmobiliaria;
USE ov_inmobiliaria;

-- Tabla de propiedades
CREATE TABLE ov_propiedades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    imagen VARCHAR(255),
    fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de contactos
CREATE TABLE ov_contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insertar algunas propiedades de ejemplo
INSERT INTO ov_propiedades (titulo, descripcion, precio, ubicacion, imagen) VALUES
('Casa Moderna', 'Hermosa casa moderna con 3 habitaciones', 250000, 'Centro', 'ov_prop1.jpg'),
('Apartamento de Lujo', 'Apartamento con vista a la ciudad', 150000, 'Norte', 'ov_prop2.jpg');