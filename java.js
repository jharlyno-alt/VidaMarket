document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let tabla = document.getElementById("carrito-body");
    let total = 0;

    tabla.innerHTML = ""; // limpiar

    carrito.forEach(producto => {
        let fila = `
            <tr class="text-center">
                <td>
                    <img src="${producto.imagen}" width="60" class="me-2">
                    ${producto.nombre}
                </td>
                <td>Bs ${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td>Bs ${producto.subtotal}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id})">
                        X
                    </button>
                </td>
            </tr>
        `;
        tabla.innerHTML += fila;
        total += producto.subtotal;
    });

    document.getElementById("total").textContent = total;
});

function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(p => p.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
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
