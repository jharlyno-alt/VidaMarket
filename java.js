// ===================== LISTA DE PRODUCTOS =====================
const productos = [
    { id: 1, nombre: "Camiseta Deportiva", precio: 25, descripcion: "Camiseta de algodón 100% en varios colores y tallas", img: "imagenes/ROPA2.PNG" },
    { id: 2, nombre: "Laptop Tecnología", precio: 1500, descripcion: "Laptop de última generación", img: "imagenes/tec2.png" },
    { id: 3, nombre: "Taza de Porcelana", precio: 3, descripcion: "Taza de porcelana en colores verde y azul", img: "imagenes/HOGAR2.png" },
    { id: 4, nombre: "Platos de Porcelana", precio: 20, descripcion: "Juego de 4 piezas de porcelana", img: "imagenes/HOGAR3.png" },
    { id: 5, nombre: "Prensa Hidráulica", precio: 100000, descripcion: "Prensa hidráulica industrial con garantía", img: "imagenes/herra1.png" },
    { id: 6, nombre: "Generador 50 kW", precio: 5500, descripcion: "Generador eléctrico automático diesel", img: "imagenes/herra2.png" }
];


// ===================== FUNCIÓN AGREGAR AL CARRITO =====================
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) {
        console.error("Producto no encontrado:", idProducto);
        return;
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existente = carrito.find(p => p.id === idProducto);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`🛒 ${producto.nombre} agregado al carrito`);
    mostrarCarrito(); 
}


function mostrarCarrito() {
    const contenedor = document.getElementById("contenedor-carrito");
    if (!contenedor) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contenedor.innerHTML = ""; // limpiar

    carrito.forEach(producto => {
        contenedor.innerHTML += `
            <div class="d-flex p-3 bg-light shadow-sm rounded mb-3">
                <img src="${producto.img}" class="me-3" width="120">

                <div class="flex-grow-1">
                    <h5 class="fw-bold">${producto.nombre}</h5>
                    <p class="text-muted mb-1">Cantidad: ${producto.cantidad}</p>
                    <p class="fw-bold">US$${producto.precio}</p>
                </div>

                <button class="btn btn-outline-danger" onclick="eliminarDelCarrito(${producto.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
    });
}

function eliminarDelCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(p => p.id !== idProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function confirmarCompra() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    alert(`✔ Compra confirmada. Total: $${total}`);

    localStorage.removeItem("carrito");
    window.location.href = "index.html";
}

function cancelarCompra() {
    if (confirm("¿Deseas cancelar tu pedido?")) {
        localStorage.removeItem("carrito");
        alert("❌ Pedido cancelado");
        mostrarCarrito();
    }
}


// ===================== INICIALIZACIÓN =====================
document.addEventListener("DOMContentLoaded", function() {
    mostrarCarrito();
});




document.getElementById("btn-buscar").addEventListener("click", function() {
    let termino = document.getElementById("barra-busqueda").value;
    if(termino.trim() === "") {
        alert("Por favor, ingresa un producto para buscar.");
    } else {
        alert("Buscando: " + termino);
        //  redirigir a otra página, filtrar productos
    }
});


function scrollCarousel(amount) {
    document.getElementById("carouselScroll").scrollLeft += amount;
}
document.getElementById("btnCarrito").addEventListener("click", function () {
    window.location.href = "carrito.html";
});
function scrollCarousel(amount) {
    document.getElementById("carouselScroll").scrollLeft += amount;
}


 // FORMULARIO CONTACTO
    const formLogin = document.getElementById("form-contacto");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;

            if(nombre.trim() === "" || email.trim() === ""){
                alert("Por favor completa todos los campos.");
                return;
            }

            alert(`Gracias ${nombre}, tu correo (${email}) se registró correctamente.`);
            form.reset();
        });
    }

    const formSesion = document.getElementById('formRegistro');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        alert("¡Ya estás registrado!");
    });
