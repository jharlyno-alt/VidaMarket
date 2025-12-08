// LISTA DE PRODUCTOS 
const productos = [
    { id: 1, nombre: "Se añidio al carrito", precio: 25,  img: "imagenes/ROPA2.PNG" },
    { id: 2, nombre: "Se añidio al carrito", precio: 1500,  img: "imagenes/tec2.png" },
    { id: 3, nombre: "Se añidio al carrito", precio: 3, img: "imagenes/HOGAR2.png" },
    { id: 4, nombre: "Se añidio al carrito", precio: 20, img: "imagenes/HOGAR3.png" },
    { id: 5, nombre: "Se añidio al carrito", precio: 100000,img: "imagenes/herra1.png" },
    { id: 6, nombre: "Se añidio al carrito", precio: 5500, img: "imagenes/herra2.png" }
];


// FUNCIÓN AGREGAR AL CARRITO 
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


// MOSTRAR CARRITO 
function mostrarCarrito() {
    const contenedor = document.getElementById("contenedorProductos");
    const totalDiv = document.getElementById("total");

    if (!contenedor) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const div = document.createElement("div");
        div.classList.add("productoCarrito");
        div.innerHTML = `
            <p>${producto.nombre} - $${producto.precio} x ${producto.cantidad} = $${subtotal}</p>
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        `;
        contenedor.appendChild(div);
    });

    totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
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


// INICIALIZACIÓN
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
