
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'col-12 col-md-6 col-lg-4 mb-4';
            itemElement.innerHTML = `
                <div class="card">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">$${(item.price)}</p>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
});

function processPayment() {
    // Implementar lógica de procesamiento de pago
    alert('¡Gracias por su compra!');
    sessionStorage.removeItem('cart'); // Limpiar carrito después del pago
    window.location.href = 'accesorios.html'; // Redirigir de vuelta a la página de productos
}

function clearCart() {
    sessionStorage.removeItem('cart');
    document.getElementById('cart-items').innerHTML = '<p class="text-center">El carrito está vacío.</p>';
}
