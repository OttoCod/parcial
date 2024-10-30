// Datos de ejemplo para las propiedades
const propiedades = [
    {
        id: 1,
        titulo: "Casa Moderna",
        precio: "$250,000",
        ubicacion: "Centro",
        imagen: "ov_imagenes/ov_prop1.jpg"
    },
    {
        id: 2,
        titulo: "Apartamento de Lujo",
        precio: "$150,000",
        ubicacion: "Norte",
        imagen: "ov_imagenes/ov_prop2.jpg"
    }
    // Más propiedades...
];

// Función para cargar las propiedades
function ov_cargarPropiedades() {
    const carousel = document.querySelector('.ov_carousel');
    carousel.innerHTML = '';

    propiedades.forEach(propiedad => {
        const propiedadElement = document.createElement('div');
        propiedadElement.className = 'ov_propiedad';
        propiedadElement.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
            <h3>${propiedad.titulo}</h3>
            <p>${propiedad.precio}</p>
            <p>${propiedad.ubicacion}</p>
            <button onclick="ov_verDetalles(${propiedad.id})">Ver detalles</button>
        `;
        carousel.appendChild(propiedadElement);
    });
}

// Función para ver detalles de una propiedad
function ov_verDetalles(id) {
    const propiedad = propiedades.find(p => p.id === id);
    alert(`Detalles de ${propiedad.titulo}\nPrecio: ${propiedad.precio}\nUbicación: ${propiedad.ubicacion}`);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    ov_cargarPropiedades();
});