// Obtener el total del carrito de la sesión de almacenamiento
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
let total = cart.reduce((acc, item) => acc + item.price, 0);

// Mostrar el total a pagar en la página
document.getElementById('total-amount').textContent = '$' + (total);

function processPayment() {
    // Redirigir al usuario a la página de la pasarela de pago
    window.location.href = 'pasarela_de_pago.html?total=' + total; // Puedes pasar el total como parámetro en la URL
}