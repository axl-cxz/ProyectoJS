// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('contactForm');

//   if (!form) return;

//   form.addEventListener('submit', function(e) {
//     // 1. Prevenir el envío por defecto del navegador
//     e.preventDefault();

//     // 2. Obtener valores de los campos principales
//     const firstName = form.querySelector('[name="first_name"]')?.value.trim();
//     const lastName = form.querySelector('[name="last_name"]')?.value.trim();
//     const email = form.querySelector('[name="email"]')?.value.trim();
//     const message = form.querySelector('[name="message"]')?.value.trim();

//     // 3. Validación simple de campos obligatorios
//     if (!firstName || !lastName || !email || !message) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Campos incompletos',
//         text: 'Por favor, completa todos los campos obligatorios antes de enviar.',
//         confirmButtonColor: '#0099ca'
//       });
//       return;
//     }

//     // 4. Confirmación con SweetAlert2
//     Swal.fire({
//       title: '¿Enviar formulario?',
//       text: 'Se enviarán tus datos de contacto.',
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonText: 'Sí, enviar',
//       cancelButtonText: 'Cancelar',
//       confirmButtonColor: '#0099ca',
//       cancelButtonColor: '#d33'
//     }).then((result) => {
//       if (result.isConfirmed) {
        
//         // Alerta de éxito
//         Swal.fire({
//           icon: 'success',
//           title: '¡Mensaje enviado!',
//           text: 'Gracias por contactarnos. Te responderemos muy pronto.',
//           confirmButtonColor: '#0099ca'
//         }).then(() => {
//           // Opción A: Si usas Formspree o un backend con PHP, descompleta esta línea:
//           // form.submit();

//           // Opción B: Limpiar los campos si no hay redirección
//           form.reset();
//         });

//       }
//     });
//   });
// });

  document.getElementById('form-contacto').addEventListener('submit', function(e) {
    // 1. Evitar que la página se recargue inmediatamente
    e.preventDefault();

    // 2. Mostrar la alerta personalizada de SweetAlert2
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se enviará la información ingresada",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0099ca',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      // 3. Si el usuario confirma la acción
      if (result.isConfirmed) {
        
        // Mostrar alerta de éxito
        Swal.fire({
          title: '¡Enviado!',
          text: 'Tu mensaje ha sido enviado correctamente.',
          icon: 'success',
          confirmButtonColor: '#0099ca'
        }).then(() => {
          // Si usas Formspree, PHP o backend, aquí envías el formulario:
          // e.target.submit();
          
          // O limpia los campos si lo manejas dinámicamente:
          document.getElementById('contactForm').reset();
        });

      }
    });
  });