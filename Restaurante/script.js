let total = 0;

function agregar() {
  total++;
  const contador = document.getElementById("total");

  contador.textContent = total;

  // activar animación
  contador.classList.add("pop");

  // quitarla para poder repetirla
  setTimeout(() => {
    contador.classList.remove("pop");
  }, 300);
}

function pagar() {
  if (total === 0) {
    alert("No has agregado nada 😌");
    return;
  }

  alert("Pedido enviado 🚀🍔 Gracias por tu compra");
  total = 0;
  document.getElementById("total").textContent = total;
}