//scroll oscuro cuando baja
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

//carrusel de imagenes
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

//barra de navegacion desplegable
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

//abre modal de video
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


//aparece la alerta y se desvanece
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

//oculta y muestra campos segun seleccion de radio
document.addEventListener('DOMContentLoaded', function () {
  // Quitar el atributo 'required' de campos 
  const timeFieldIds = [
    'id_Hora_desayuno',
    'id_Hora_media_manana',
    'id_Hora_almuerzo',
    'id_Hora_media_tarde',
    'id_Hora_cena',
    'Macronutrientes'
  ];

  // Eliminar 'required' de los campos
  timeFieldIds.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.removeAttribute('required');
    }
  });

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

  // Iterar sobre las opciones para mostrar/ocultar grupos según las respuestas
  for (const triggerId in toggleMap) {
    const fieldName = triggerId.replace('id_', '');
    const radios = document.getElementsByName(fieldName);
    const targetGroup = document.getElementById(toggleMap[triggerId]);

    if (!targetGroup || radios.length === 0) continue;

    const inputs = targetGroup.querySelectorAll("input, select, textarea");

    // Guardar el estado de los campos 'required'
    const requiredMap = new Map();
    inputs.forEach(input => {
      requiredMap.set(input, input.hasAttribute("required"));
    });

    // Función para actualizar la visibilidad y los campos requeridos
    const updateVisibility = () => {
      const selected = Array.from(radios).find(r => r.checked);
      if (!selected) {
        targetGroup.style.display = 'none';
        disableFields(targetGroup, true);
        setRequiredFields(false);
        return;
      }

      if (selected.value === "True") {
        targetGroup.style.display = 'block';
        disableFields(targetGroup, false);
        setRequiredFields(true);
      } else {
        targetGroup.style.display = 'none';
        disableFields(targetGroup, true);
        setRequiredFields(false);
      }
    };

    // Excluir campos de hora de la validación de required
    const timeFields = [
      'Hora_desayuno',
      'Hora_media_manana',
      'Hora_almuerzo',
      'Hora_media_tarde',
      'Hora_cena',
      'Macronutrientes'
    ];

    // Función para ajustar el 'required' según las respuestas
    const setRequiredFields = (shouldBeRequired) => {
      inputs.forEach(input => {
        const originallyRequired = requiredMap.get(input);
        const fieldName = input.name || input.id;

        if (timeFields.includes(fieldName)) {
          return; // No modificar los campos de hora
        }

        if (originallyRequired) {
          if (shouldBeRequired) {
            input.setAttribute("required", "required");
          } else {
            input.removeAttribute("required");
          }
        }
      });
    };

    // Actualizar visibilidad y requerimientos al cambiar radio buttons
    radios.forEach(radio => {
      radio.addEventListener('change', updateVisibility);
    });

    // Iniciar la visibilidad con el estado inicial
    updateVisibility();
  }

  // Función para habilitar o deshabilitar campos
  function disableFields(container, shouldDisable) {
    const inputs = container.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
      input.disabled = shouldDisable;
    });
  }

  // Validación de formulario y avance a la siguiente sección
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      const currentStep = document.querySelector(".form-step:not([style*='display: none'])");
      if (!currentStep) return;

      const inputs = currentStep.querySelectorAll("input, select, textarea");
      let valid = true;

      // Validar los campos de la sección actual
      for (let input of inputs) {
        const group = input.closest('.form-group');

        // Saltar si está oculto
        if (!input.offsetParent) continue;

        // Saltar los grupos que empiezan con 'group_Info_'
        if (group && group.id && group.id.startsWith('group_Info_')) continue;

        // Validar radios y checkboxes requeridos
        if ((input.type === 'radio' || input.type === 'checkbox') && input.required) {
          const groupInputs = currentStep.querySelectorAll(`input[name="${input.name}"]`);
          const oneChecked = Array.from(groupInputs).some(i => i.checked);
          if (!oneChecked) {
            valid = false;
            break;
          }
        }

        // Validar campos normales
        if (input.required && input.value.trim() === '') {
          valid = false;
          break;
        }
      }

      // Si el formulario no es válido, no avanzamos
      if (!valid) {
        // Los errores ya se están mostrando en tu template
        return;
      }

      // Si todo está correcto, avanza
      nextPrev(1);
    });
  }

});


//calendario personalizado
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


//abre modal de formulario
document.addEventListener('DOMContentLoaded', function () {
  // Abre el modal
  window.abrir_modal = function (url) {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Error al cargar el modal');
        return response.text();
      })
      .then(html => {
        const modalContainer = document.getElementById("modal-container");
        modalContainer.innerHTML = html;

        const modal = document.getElementById("modal");
        if (modal) {
          modal.classList.add("show");
          modal.style.display = "flex";
          document.body.style.overflow = "hidden";

          // Cierra al hacer clic fuera del modal
          modal.addEventListener("click", function (e) {
            if (e.target === modal) {
              cerrar_modal();
            }
          });

          // Cierra con botón interno
          const closeBtn = modal.querySelector(".close-btn");
          if (closeBtn) {
            closeBtn.addEventListener("click", cerrar_modal);
          }
        }
      })
      .catch(error => console.error(error));

    return false;
  };

  // Cierra el modal
  window.cerrar_modal = function () {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.classList.remove("show");
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  };
});

//cambio de pasos en formulario
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  let currentStep = 0;

  function showStep(index) {
      steps.forEach((step, i) => {
          step.style.display = i === index ? "block" : "none";
      });
  }

  document.querySelectorAll(".next-step").forEach(button => {
      button.addEventListener("click", () => {
          if (currentStep < steps.length - 1) {
              currentStep++;
              showStep(currentStep);
          }
      });
  });

  document.querySelectorAll(".prev-step").forEach(button => {
      button.addEventListener("click", () => {
          if (currentStep > 0) {
              currentStep--;
              showStep(currentStep);
          }
      });
  });

  showStep(currentStep);
});


//validacion de formulario de varios pasos
document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 0;
  const steps = document.querySelectorAll(".form-step");

  function showStep(n) {
    steps.forEach((step, index) => {
      step.style.display = index === n ? "block" : "none";
    });

    document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline-block";
    document.getElementById("nextBtn").style.display = n === steps.length - 1 ? "none" : "inline-block";
    document.getElementById("submitBtn").style.display = n === steps.length - 1 ? "inline-block" : "none";
  }

  let isFirstValidation = true;
  
  const optionalFields = [
    "Hora_desayuno",
    "Hora_media_manana",
    "Hora_almuerzo",
    "Hora_media_tarde",
    "Hora_cena",
    "Macronutrientes"
  ];


  function validateStep() {
    let valid = true;
    const currentStepElement = steps[currentStep];
    const currentFields = currentStepElement.querySelectorAll("input, select, textarea");
  
    // Limpiar clases de error y alertas anteriores
    currentFields.forEach(field => field.classList.remove("invalid"));
  
    const oldAlert = currentStepElement.querySelector(".form-alert-global");
    if (oldAlert) oldAlert.remove();
  
    let errorMessages = [];
  
    for (const field of currentFields) {
      const container = field.closest(".form-group");
      const isHidden = container && getComputedStyle(container).display === "none";
      if (isHidden) continue;
    
      const value = field.value.trim();
    
      // PRIMERA VALIDACIÓN: solo marcar campos vacíos, sin mensajes detallados
      if (isFirstValidation) {
        if (field.type !== "checkbox" && !value && !optionalFields.includes(field.name)) {
          field.classList.add("invalid");
          valid = false;
        }
        continue; // saltamos todo lo demás si es la primera validación
      }
  
      // VALIDACIONES ESPECÍFICAS después de la primera validación
      if (field.type !== "checkbox" && !value) {
        if (!optionalFields.includes(field.name)) {
          field.classList.add("invalid");
          valid = false;
          errorMessages.push("Por favor complete todos los campos.");
          break;
        }
      }
      
      if (field.type !== "checkbox" && (!value || value === "None") && !optionalFields.includes(field.name)) {
        allValid = false;
      }
      
  
      if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          field.classList.add("invalid");
          valid = false;
          errorMessages.push("Por favor ingresa un correo válido.");
          break;
        }
      }
  
      if (field.type === "number") {
        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
          field.classList.add("invalid");
          valid = false;
          errorMessages.push(`El campo "${field.name}" debe ser un número.`);
          break;
        }
      
        // Validación específica para el campo de descanso
        if (field.id === "id_Descanso" && numericValue > 24) {
          field.classList.add("invalid");
          valid = false;
          errorMessages.push(`Ingrese una hora de descanso valida`);
          break;
        }
      }
      
  
      if (field.name.toLowerCase().includes("telefono")) {
        const phoneRegex = /^[0-9]{7,15}$/;
        if (!phoneRegex.test(value)) {
          field.classList.add("invalid");
          valid = false;
          errorMessages.push("Por favor ingresa un número de teléfono válido.");
          break;
        }
      }
  
      if (field.type === "date") {
        const date = new Date(value);
        if (isNaN(date.getTime())) {
          field.classList.add("invalid");
          valid = false;
          errorMessages.push(`La fecha ingresada en "${field.name}" no es válida.`);
          break;
        }
      }
  
      if (field.type === "time" && value) {
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!timeRegex.test(value)) {
          field.classList.add("invalid");
          valid = false;
          errorMessages.push(`La hora en "${field.name}" no es válida. Usa formato HH:MM.`);
          break;
        }
      }
      
  
      if (field.type === "radio") {
        const name = field.name;
        const radios = currentStepElement.querySelectorAll(`input[type="radio"][name="${name}"]`);
        const isChecked = Array.from(radios).some(r => r.checked);
        if (!isChecked) {
          radios.forEach(radio => radio.classList.add("invalid"));
          valid = false;
          errorMessages.push(`Por favor complete todos los campos.`);
          break;
        }
      }
    }
  
    // Mostrar alerta si hay errores
    if (!valid) {
      const alert = document.createElement("li");
      alert.className = "alert error form-alert-global";
  
      if (isFirstValidation) {
        alert.innerText = "Por favor complete todos los campos.";
      } else {
        alert.innerText = errorMessages.join("\n");
      }
  
      const lastField = currentFields[currentFields.length - 1];
      const lastFormGroup = lastField.closest(".form-group");
      lastFormGroup.insertAdjacentElement("afterend", alert);
  
      setTimeout(() => {
        alert.style.transition = "opacity 0.5s ease-out";
        alert.style.opacity = "0";
        setTimeout(() => alert.remove(), 500);
      }, 5000);
    }
  
    isFirstValidation = false;
    return valid;
  }
  

  function nextPrev(direction) {
    if (direction === 1 && !validateStep()) return;
    currentStep += direction;
    showStep(currentStep);
  }

  // Exponer funciones globales si se usan en HTML (ej: onclick)
  window.nextPrev = nextPrev;
  window.showStep = showStep;

  // Mostrar el primer paso
  showStep(currentStep);
});


//bloquear letras en el campo de telefono
document.addEventListener("DOMContentLoaded", function () {
  const telefonoInput = document.querySelector('input[name="Telefono"]');

  if (telefonoInput) {
    telefonoInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, ""); // Reemplaza todo lo que no sea dígito
    });
  }
});


// mostrar macronutrientes seleccionados
document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('Macronutrientes');
  const container = document.getElementById('selected-items');
  const hiddenInput = document.getElementById('macros-seleccionados');
  const form = document.querySelector('form');

  let selectedItems = new Set();
  let removedItems = new Set(); // opcional, por si quieres usar esto después

  function renderSelectedItems() {
    container.innerHTML = '';
    selectedItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'selected-item';
      div.innerHTML = `
        ${item}
        <span data-value="${item}" style="margin-left:8px; cursor:pointer; color:red;">&times;</span>
      `;
      container.appendChild(div);
    });

    // ✅ Actualiza el campo oculto
    hiddenInput.value = Array.from(selectedItems).join(',');

    // Agrega funcionalidad para quitar elementos
    container.querySelectorAll('span[data-value]').forEach(span => {
      span.addEventListener('click', function () {
        const value = this.dataset.value;
        selectedItems.delete(value);
        removedItems.add(value);
        restoreOption(value);
        renderSelectedItems();
      });
    });
  }

  function restoreOption(value) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
    sortSelectOptions(select);
  }

  function sortSelectOptions(select) {
    const options = Array.from(select.options)
      .filter(opt => opt.value !== '')
      .sort((a, b) => a.text.localeCompare(b.text));

    const firstOption = select.querySelector('option[value=""]');
    select.innerHTML = '';
    if (firstOption) select.appendChild(firstOption);
    options.forEach(opt => select.appendChild(opt));
  }

  if (select) {
    select.addEventListener('change', function () {
      const selectedValue = this.value;
      if (selectedValue && !selectedItems.has(selectedValue)) {
        selectedItems.add(selectedValue);
        removedItems.delete(selectedValue);
        this.querySelector(`option[value="${selectedValue}"]`)?.remove();
        renderSelectedItems();
      }
      this.value = '';
    });
  }

  // ✅ Asegura que el input oculto tenga el valor actualizado al enviar
  if (form) {
    form.addEventListener('submit', function () {
      hiddenInput.value = Array.from(selectedItems).join(',');
    });
  }
});

