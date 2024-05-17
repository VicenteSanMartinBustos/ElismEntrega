
  function addToCart(id, name, price, img) {
      let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
      
      // Verificar si el producto ya está en el carrito
      const isAlreadyInCart = cart.some(item => item.id === id);
      if (isAlreadyInCart) {
          alert('Este producto ya está en el carrito.');
      } else {
          cart.push({ id, name, price, img });
          sessionStorage.setItem('cart', JSON.stringify(cart));
          alert(name + ' agregado al carrito.');
          updateCartTotal();
      }
  }

  

  // Actualizar el total al cargar la página
  updateCartTotal();
  