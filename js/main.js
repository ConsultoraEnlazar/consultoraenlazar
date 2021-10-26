let scrollBoton = document.querySelector(".arrow-icon"); //Variable que apunta al boton de subir al top

//Funcion de subir al top con boton
addEventListener('scroll', () => {
    scrollBoton.classList.toggle('active', window.scrollY > 900);
});
scrollBoton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})


//Envio de formulario CONSULTA
function submitFormConsultaGenerica(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: 'assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}

//Envio de formulario REVISAMO TU CV
function submitFormRevisamosTuCV(form) {
    Swal.fire({
        title: 'Tu currículum ha sido enviado con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}


//Envio de formulario TRABAJA CON NOSOTROS
function submitForm(form) {
    Swal.fire({
        title: 'Tu currículum ha sido enviado con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}

//SERVICIOS PARA PARTICULARES Y GRUPOS
//Envio de formulario Servicio: Elaboración de CV
function submitFormElaboracionCV(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Preparación para entrevistas
function submitFormPreparacionEntrevistas(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Coaching
function submitFormCoaching(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Orientación vocacional y ocupacional
function submitFormOrientacion(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Perfil profesional en redes
function submitFormPerfilRedes(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Inserción laboral
function submitFormInsercionLaboral(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Autoconocimiento profesional
function submitFormAutoconocimiento(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Acompañamiento en el mercado laboral para personas con capacidades diferenciales
function submitFormCapacidadesDiferenciales(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Outplacement
function submitFormOutplacement(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}

//SERVICIOS PARA EMPRESAS
//Envio de formulario Servicio: Reclutamiento y selección
function submitFormReclutamientoSeleccion(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Selección de personal IT
function submitFormSeleccionPersonalITServicioEmpresas(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Capacitaciones
function submitFormCapacitaciones(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Formación y desarrollo
function submitFormFormacionYDesarrollo(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Evaluaciones de desempeño
function submitFormEvaluacionDesempenio(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Performance management
function submitFormPerformance(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Consultoría RRHH
function submitFormConsultoriaRRHH(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Evaluaciones psicotécnicas e informes
function submitFormEvaluacionesPsicotecnicas(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
//Envio de formulario Servicio: Outplacement Empresas
function submitFormOutplacementEmpresas(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}

//CURSOS Y TALLERES
// Curso: Webinars & Workshops
function submitFormWebinars(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Introducción a la selección de personal
function submitFormIntroduccionSeleccionPersonal(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Selección de personal profesional
function submitFormSeleccionPersonalProfesional(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Selección de personal IT
function submitFormSeleccionPersonalIT(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Coaching: Introducción y práctica
function submitFormCoachingIntroduccionYPractica(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Coaching especializado
function submitFormCoachingEspecializado(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: PNL: Programación neurolingüística
function submitFormPnl(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Inteligencia emocional
function submitFormInteligenciaEmocional(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Metodologías ágiles
function submitFormMetodologiasAgiles(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Asistente de Recursos Humanos
function submitFormAsistenteRRHH(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Gerente de Recursos Humanos
function submitFormRRHH(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Liderazgo & Gestión de equipos
function submitFormLiderazgoGestion(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Orientación vocacional & Ocupacional
function submitFormOrientacionVocacional(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
// Curso: Inserción laboral & Perfil profesional
function submitFormInsercionLaboral(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}
