// doom.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio cargado correctamente.");

    // ===============================================
    // MANEJO DEL HEADER AL HACER SCROLL
    // ===============================================
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Si baja más de 50px, agregamos la clase "scrolled"
            navbar.classList.add('scrolled');
        } else {
            // Si vuelve arriba, quitamos la clase para que sea transparente
            navbar.classList.remove('scrolled');
        }
    });

    // ===============================================
    // MANEJO DEL FORMULARIO DE CONTACTO CON EMAILJS
    // ===============================================
    const contactForm = document.getElementById('contactForm');
    const btnSubmit = document.getElementById('btn-submit');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // Cambiar texto del botón para feedback visual
            const originalBtnText = btnSubmit.innerText;
            btnSubmit.innerText = 'Enviando...';

            // Capturar datos del formulario
            const userName = contactForm.user_name.value;
            const userEmail = contactForm.user_email.value;
            const rawSubject = contactForm.subject.value;
            const message = contactForm.message.value;

            // Formatear el Asunto
            const finalSubject = `LR Portafolio "${rawSubject}"`;

            // Parámetros para EmailJS (Deben coincidir con tu plantilla)
            const templateParams = {
                from_name: userName,
                reply_to: userEmail,       
                subject: finalSubject,     
                message: message
            };

            // ✅ TUS CREDENCIALES CONFIGURADAS
            const SERVICE_ID = 'service_qnpj4w5'; 
            const TEMPLATE_ID = 'template_b7ye48i';

            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                .then(() => {
                    alert('¡Formulario enviado con éxito!');
                    contactForm.reset();
                    btnSubmit.innerText = originalBtnText;
                }, (err) => {
                    alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
                    console.log('FAILED...', err);
                    btnSubmit.innerText = originalBtnText;
                });
        });
    }
});