// Función para deshabilitar los elementos con stock 0
function disableOutOfStockItems() {
  // Obtener todos los elementos de productos en la página
  const items = document.querySelectorAll('.item-product');

  // Iterar sobre todos los elementos
  items.forEach(item => {
      // Obtener el texto que contiene el stock
      const stockText = item.querySelector('.info .code b');
      
      // Verificar si el stock es 0
      if (stockText && stockText.textContent.trim() === 'Stock: 0') {
          // Cambiar el color de fondo para los productos sin stock
          item.style.backgroundColor = '#f8d7da'; // Color de fondo rojo claro (puedes cambiarlo por el que desees)
          
          // Deshabilitar la opción de hacer clic (también podrías deshabilitar botones dentro)
          item.style.pointerEvents = 'none'; // Esto deshabilita el clic
          item.style.opacity = '0.5'; // También puedes hacer que los productos sin stock sean más transparentes
      }
  });
}

// Función para observar cambios en el DOM
function observeDOM() {
  const targetNode = document.body; // Observar todo el cuerpo de la página
  const config = { childList: true, subtree: true }; // Configuración para observar cambios en los hijos y en todo el árbol de nodos

  const observer = new MutationObserver(() => {
    // Cada vez que haya un cambio en el DOM, ejecutamos la función de deshabilitar elementos sin stock
    disableOutOfStockItems();
  });

  // Empezamos a observar el DOM
  observer.observe(targetNode, config);
}

// Ejecutar cuando la página haya cargado
window.addEventListener('load', () => {
  console.log('Running extension');
  observeDOM(); // Iniciar la observación de cambios en el DOM
});
