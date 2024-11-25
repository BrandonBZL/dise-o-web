// Obtener los elementos de los botones y los modales
const btnAsesoramiento = document.getElementById("btnAsesoramiento");
const btnDisenoWeb = document.getElementById("btnDisenoWeb");
const btnActualizacionSoftware = document.getElementById("btnactualizacionsoftware");
const openFormButton = document.getElementById("open-form");

const modalAsesoramiento = document.getElementById("modalAsesoramiento");
const modalDisenoWeb = document.getElementById("modalDisenoWeb");
const modalActualizacionSoftware = document.getElementById("modalActualizacionSoftware");
const contactModal = document.getElementById("contactModal");

const closeAsesoramiento = document.getElementById("closeAsesoramiento");
const closeDisenoWeb = document.getElementById("closeDisenoWeb");
const closeActualizacionSoftware = document.getElementById("closeActualizacionSoftware");
const closeModal = document.getElementById("closeModal");
const cancelButton = document.getElementById("cancelButton");
const cancelAsesoramiento = document.getElementById("cancelAsesoramiento");
const cancelDisenoWeb = document.getElementById("cancelDisenoWeb");
const cancelActualizacionSoftware = document.getElementById("cancelActualizacionSoftware");

// Función para abrir cualquier modal
function openModal(modal) {
    modal.style.display = "block";
}

// Función para cerrar cualquier modal
function closeModalGeneric(modal) {
    modal.style.display = "none";
}

// Abrir los modales
btnAsesoramiento.onclick = () => openModal(modalAsesoramiento);
btnDisenoWeb.onclick = () => openModal(modalDisenoWeb);
btnActualizacionSoftware.onclick = () => openModal(modalActualizacionSoftware);
openFormButton.onclick = () => openModal(contactModal);  // Asegúrate de que el modal correcto se abra

// Cerrar los modales
closeAsesoramiento.onclick = () => closeModalGeneric(modalAsesoramiento);
closeDisenoWeb.onclick = () => closeModalGeneric(modalDisenoWeb);
closeActualizacionSoftware.onclick = () => closeModalGeneric(modalActualizacionSoftware);
closeModal.onclick = () => closeModalGeneric(contactModal);

// Botones de cancelación para los modales
cancelButton.onclick = () => closeModalGeneric(contactModal);
cancelAsesoramiento.onclick = () => closeModalGeneric(modalAsesoramiento);
cancelDisenoWeb.onclick = () => closeModalGeneric(modalDisenoWeb);
cancelActualizacionSoftware.onclick = () => closeModalGeneric(modalActualizacionSoftware);

// Cerrar el modal si se hace clic fuera del área modal (previene el cierre si se hace clic dentro del modal)
window.onclick = (event) => {
    if (event.target === modalAsesoramiento) {
        closeModalGeneric(modalAsesoramiento);
    } else if (event.target === modalDisenoWeb) {
        closeModalGeneric(modalDisenoWeb);
    } else if (event.target === modalActualizacionSoftware) {
        closeModalGeneric(modalActualizacionSoftware);
    } else if (event.target === contactModal) {
        closeModalGeneric(contactModal);
    }
};