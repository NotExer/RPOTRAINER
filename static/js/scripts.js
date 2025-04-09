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


document.addEventListener('DOMContentLoaded', function () {
  const toggleMap = {
    'id_Enfermedad': 'group_Info_enfermedad',
    'id_Cirugia': 'group_Info_cirugia',
    'id_Dolor': 'group_Info_dolor',
    'id_Medicamento': 'group_Info_medicamento',
    'id_Restricciones': 'group_Info_restricciones',
    'id_Deporte': 'group_Info_deporte',
    'id_Nutricion': 'group_Info_nutricion',
    'id_Alergia': 'group_Info_alergia',
    'id_Dieta': 'group_Info_dieta',
    'id_Evitaciones': 'group_Info_evitaciones',
    'id_Entrenamientos': 'group_Info_entrenamientos',
    'id_Equipamiento': 'group_Info_equipamiento',
  };

  for (const triggerId in toggleMap) {
    const fieldName = triggerId.replace('id_', '');
    const radios = document.getElementsByName(fieldName);
    const targetGroup = document.getElementById(toggleMap[triggerId]);

    let anyChecked = false;

    radios.forEach(radio => {
      // Escuchamos cambios
      radio.addEventListener('change', () => {
        if (radio.value === "True" && radio.checked) {
          targetGroup.style.display = 'block';
        } else if (radio.value === "False" && radio.checked) {
          targetGroup.style.display = 'none';
        }
      });

      // Al cargar, detectamos si algún radio está marcado
      if (radio.checked) {
        anyChecked = true;
        if (radio.value === "True") {
          targetGroup.style.display = 'block';
        } else {
          targetGroup.style.display = 'none';
        }
      }
    });

    // Si no se ha seleccionado nada, ocultamos el grupo
    if (!anyChecked && targetGroup) {
      targetGroup.style.display = 'none';
    }
  }
});






document.addEventListener('DOMContentLoaded', () => {
  const dateInputs = document.querySelectorAll('.datepicker');

  dateInputs.forEach(input => {
    input.addEventListener('focus', () => showCalendar(input));
  });

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  function showCalendar(input) {
    removeCalendar();

    const calendar = document.createElement('div');
    calendar.className = 'custom-calendar';

    const header = document.createElement('div');
    header.className = 'calendar-header';

    const monthSelect = document.createElement('select');
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    months.forEach((month, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = month;
      if (i === currentMonth) option.selected = true;
      monthSelect.appendChild(option);
    });

    const yearSelect = document.createElement('select');
    for (let y = currentYear - 100; y <= currentYear + 20; y++) {
      const option = document.createElement('option');
      option.value = y;
      option.textContent = y;
      if (y === currentYear) option.selected = true;
      yearSelect.appendChild(option);
    }

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.background = 'none';
    closeBtn.style.color = '#fff';
    closeBtn.style.border = 'none';
    closeBtn.style.fontSize = '1rem';
    closeBtn.style.cursor = 'pointer';

    header.appendChild(monthSelect);
    header.appendChild(yearSelect);
    header.appendChild(closeBtn);
    calendar.appendChild(header);



    const daysOfWeek = ['L', 'M', 'W', 'J', 'V', 'S', 'D'];
const dayHeader = document.createElement('div');
dayHeader.className = 'calendar-grid';

daysOfWeek.forEach(d => {
  const day = document.createElement('div');
  day.textContent = d;
  day.style.fontWeight = 'bold';
  day.style.textAlign = 'center';
  day.style.opacity = '0.7';
  dayHeader.appendChild(day);
});

calendar.appendChild(dayHeader);



    const grid = document.createElement('div');
    grid.className = 'calendar-grid';
    calendar.appendChild(grid);

    renderDays(grid, currentMonth, currentYear, input);

    monthSelect.addEventListener('change', () => {
      currentMonth = parseInt(monthSelect.value);
      renderDays(grid, currentMonth, currentYear, input);
    });

    yearSelect.addEventListener('change', () => {
      currentYear = parseInt(yearSelect.value);
      renderDays(grid, currentMonth, currentYear, input);
    });

    closeBtn.addEventListener('click', removeCalendar);

    document.body.appendChild(calendar);
    const rect = input.getBoundingClientRect();
    calendar.style.top = `${rect.bottom + window.scrollY + 5}px`;
    calendar.style.left = `${rect.left + window.scrollX}px`;

    document.addEventListener('click', outsideClick);
  }

  function renderDays(container, month, year, input) {
    container.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dayOffset = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < dayOffset; i++) {
      const empty = document.createElement('div');
      container.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const day = document.createElement('div');
      day.className = 'calendar-day';
      day.textContent = d;
      day.addEventListener('click', () => {
        const selected = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        input.value = selected;
        removeCalendar();
      });
      container.appendChild(day);
    }
  }

  function removeCalendar() {
    const cal = document.querySelector('.custom-calendar');
    if (cal) cal.remove();
    document.removeEventListener('click', outsideClick);
  }

  function outsideClick(e) {
    if (!e.target.closest('.custom-calendar') && !e.target.classList.contains('datepicker')) {
      removeCalendar();
    }
  }
});


