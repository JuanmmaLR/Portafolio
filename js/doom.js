// doom.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio cargado correctamente.");

    // Manejo del formulario de contacto con EmailJS
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