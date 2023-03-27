$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("#enviar").click(function () {
      alert("Enviado correctamente");
    });
  });
  
  const titulos = document.querySelectorAll(".titulo");
  for (let i = 0; i < titulos.length; i++) {
  titulos[i].addEventListener("dblclick", () => {
    titulos[i].classList.toggle("...");
  });}    
  
    $(document).ready(()=>{$('.alternar').on('click',function() {$('p').toggle();});});
  
    $(document).ready(()=>{$('.reset').on('click',function() {$('p').toggle();});});
  
  
  
    const addButtons = document.querySelectorAll('.add-to-cart');
  
  const cart = [];
  
  addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const name = button.dataset.name;
    const sizeElement = button.parentElement.querySelector('.product-size');
    const price = parseInt(sizeElement.options[sizeElement.selectedIndex].dataset.price);
    const size = sizeElement.value;
  
    const existingItem = cart.find(item => item.id === id && item.size === size);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: id,
        name: name,
        price: price,
        size: size,
        quantity: 1
      });
    }
  
    updateCartSummary();
  });
  });
  
  function updateCartSummary() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    let total = 0;
  
    cartItems.innerHTML = '';
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} (${item.size}) x ${item.quantity} - $${item.price * item.quantity}`;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.addEventListener('click', () => {
        const index = cart.indexOf(item);
        cart.splice(index, 1);
        updateCartSummary();
      });
      li.appendChild(deleteButton);
      cartItems.appendChild(li);
      total += item.price * item.quantity;
    });
  
    cartTotal.textContent = `$${total}`;
  
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
  
  const li = document.createElement('li');
  li.textContent = `${item.name} (${item.size}) x ${item.quantity} - $${item.price * item.quantity}`;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', () => {
  const index = cart.indexOf(item);
  cart.splice(index, 1);
  updateCartSummary();
  });
  li.appendChild(deleteButton);
  cartItems.appendChild(li);
  
  
    cartItems.appendChild(li);
    deleteButton.addEventListener('click', () => {
  const index = cart.findIndex(cartItem => cartItem.id === item.id && cartItem.size === item.size);
  cart.splice(index, 1);
  updateCartSummary();
  });
  
  
  const total = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
  
  const cartTotal = document.querySelector('.cart-total');
  cartTotal.textContent = `$${total}`; 
  
  function enviarPedido() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    const items = document.querySelectorAll(".cart-items li");
    const total = document.querySelector(".cart-total").textContent;
    const message = `¡Hola! Me gustaría hacer un pedido con los siguientes items: ${[...items].map(item => item.textContent.replace('Eliminar', '')).join(", ")}. Total: ${total}. Nombre: ${name}. Dirección: ${address}. Email: ${email}. Teléfono: ${phone}.`;
    const link = document.getElementById("encarga_aqui");
    link.href = `https://api.whatsapp.com/send?phone=990225910&text=${encodeURIComponent(message)}`;
  }
  
  document.querySelector('#encarga_aqui');
  
  
  
  enviarBtn.addEventListener('click', () => {
  
    
  // Obtén los detalles del carrito de compras
  const cartItems = document.querySelectorAll('.cart-items li');
  const cartTotal = document.querySelector('.cart-total').textContent;
  
  let message = 'Mi carrito de compras:\n\n';
  cartItems.forEach(item => {
    const itemDetails = item.textContent.split(' - ');
    const itemName = itemDetails[0];
    const itemPrice = itemDetails[1];
    message += `${itemName}: ${itemPrice}\n`;
    message = message.replace(/Eliminar/g, '');
  });
  message += `\nTotal: ${cartTotal}`;
  
  
  const phoneNumber = '+56990225910'; // Cambia este número al número al que deseas enviar el mensaje
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink);
  });
  
  const select = document.querySelector('.product-size');
    const button = document.querySelector('.add-to-cart');
  
    select.addEventListener('change', () => {
     
      const price = select.options[select.selectedIndex].getAttribute('data-price');      
  
      button.setAttribute('data-price', price);
    });
  
  
    const cartSummary = document.querySelector('.cart-summary');
  
  cartSummary.addEventListener('mouseover', () => {
    cartSummary.style.transform = 'translateY(-300px)';
  });
  
  cartSummary.addEventListener('mouseout', () => {
    cartSummary.style.transform = 'translateY(100px)';
  });
  
  

  $(document).ready(function() {
    // Agregar evento de clic al botón de "Detalle de compra"
    $(".cart-summary h2").click(function() {
      // Alternar la clase "abierto" en el contenedor del carrito
      $(".cart-summary").toggleClass("abierto");
    });

    // Agregar evento de clic al documento para cerrar el carrito cuando se hace clic fuera de él
    $(document).click(function(event) {
      if (!$(event.target).closest(".cart-summary").length && $(".cart-summary").hasClass("abierto")) {
        $(".cart-summary").removeClass("abierto");
      }
    });
  });

  
