// Simulación de carrito almacenado
let carrito = JSON.parse(localStorage.getItem("carrito")) || {
    cantidad: 1,
    subtotal: 10.5,
    impuestos: 5,
    total: 15.5
};

// CONFIRMAR COMPRA
function confirmarCompra() {
    alert("✔ Compra confirmada");
    localStorage.removeItem("carrito");
    window.location.href = "index.html"; // redirige a la página principal
}

// CANCELAR COMPRA
function cancelarCompra() {
    alert("Operación cancelada");
    window.history.back(); // vuelve a la página anterior
}

// BORRAR CARRITO
function borrarCarrito() {
    if (confirm("¿Seguro que deseas borrar el carrito?")) {
        localStorage.removeItem("carrito");
        alert("❌ Carrito borrado");
        location.reload(); 
    }
}



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
