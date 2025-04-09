document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("scrollspy");

  if (!navbar) {
    console.warn("No se encontró el elemento con id 'scrollspy'");
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-gray-900");
    } else {
      navbar.classList.remove("bg-gray-900");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Aseguramos que el DOM esté completamente cargado antes de acceder a los elementos
  const carruselInner = document.querySelector(".carrusel-inner");
  const carruselItems = document.querySelectorAll(".carrusel-item");
  const totalItems = carruselItems.length;
  let index = 0;

  if (carruselInner && carruselItems.length > 0) {
    // Solo continuamos si los elementos carrusel-inner y carrusel-item existen
    function getVisibleItemsCount() {
      return window.innerWidth <= 768 ? 1 : 3; // 1 imagen en móviles, 3 en pantallas grandes
    }

    function moveToNext() {
      const visibleItems = getVisibleItemsCount();
      const percentageWidth = 100 / visibleItems;

      index = (index + 1) % totalItems;
      carruselInner.style.transition = "transform 1s ease"; // Aseguramos que la transición esté configurada
      carruselInner.style.transform = `translateX(-${
        index * percentageWidth
      }%)`;

      // Reiniciar carrusel con efecto fade-in cuando lleguemos cerca del final
      if (index >= totalItems - visibleItems) {
        carruselInner.classList.add("fade-in");
        setTimeout(() => {
          carruselInner.style.transform = `translateX(0)`; // Llevar al inicio
          index = 0;
          carruselInner.classList.remove("fade-in"); // Eliminar efecto fade-in
        }, 1000); // Asegurarse que esto coincida con la duración de la transición
      }
    }

    setInterval(moveToNext, 3000);
  } else {
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navbar-nav a'); // cambiamos selector a los <a> reales
  const menuButton = document.getElementById("menu-button");
  const menuIcon = document.querySelector(".menu-icon");
  const navbarCollapse = document.getElementById("navbarSupportedContent");

  // Función para manejar visibilidad según el tamaño de la ventana
  function handleResize() {
      if (window.innerWidth >= 992) { // Escritorio (breakpoint Bootstrap)
          navbarCollapse.classList.add("open");
      } else {
          navbarCollapse.classList.remove("open");
      }
  }

  // Ejecutar al cargar
  handleResize();

  // Ejecutar al cambiar tamaño
  window.addEventListener("resize", handleResize);

  // Toggle menú con animación SOLO para móviles
  menuButton.addEventListener("click", function () {
      if (window.innerWidth < 992) {
          menuIcon.classList.toggle("open");
          navbarCollapse.classList.toggle("open");
      }
  });

  // Scroll suave y cierre del menú al hacer clic en un enlace (solo en móviles)
  navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          if (window.innerWidth < 992) {
              // Cerrar menú solo si estamos en móviles
              menuIcon.classList.remove("open");
              navbarCollapse.classList.remove("open");
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modal = document.getElementById("exampleModalCenter");

    openModalBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que se siga el enlace
        modal.classList.add("show");
        modal.style.display = "flex"; // O "block", dependiendo de tu diseño
        document.body.style.overflow = "hidden"; // Opcional: evita scroll de fondo
    });

    closeModalBtn.addEventListener("click", function () {
        modal.classList.remove("show");
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restaura scroll
        // Detener el video al cerrar (opcional)
        const iframe = document.getElementById("videoIframe");
        iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });

    // También puedes cerrar el modal al hacer clic fuera del contenido
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModalBtn.click();
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
  const alerts = document.querySelectorAll(".alert");

  alerts.forEach(alert => {
    setTimeout(() => {
      alert.style.transition = "opacity 0.5s ease-out";
      alert.style.opacity = "0";
      setTimeout(() => alert.remove(), 500); // Lo remueve después de desvanecerse
    }, 4000); // Espera 4 segundos antes de empezar a desvanecer
  });
});