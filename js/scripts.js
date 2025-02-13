
// Nos aseguramos que el código JavaScript no se ejecute hasta que el HTML está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Declaración de variables
    let input = document.querySelector('#ingresar-tarea'); // donde el usuario escribe la tarea
    const boton = document.querySelector('#boton-agregar'); // botón para agregar la tarea
    const listaDeTareas = document.querySelector('#lista-de-tareas'); // contenedor donde se agregarán las tareas

    boton.addEventListener('click', agregarTarea); // añadimos un listener al botón para agregar la tarea
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') agregarTarea();
    }); // añadimos el evento "Enter" también para agregar la tarea

    function agregarTarea() {
        // verificamos que el usuario haya escrito algo y eliminamos los espacios por delante y por detrás
        if (input.value.trim()) {
            // creamos un contenedor para cada tarea
            let tareaNueva = document.createElement('div');
            tareaNueva.classList.add('tarea');

            // añadimos el texto a la tarea con el contenido del input
            let texto = document.createElement('p');
            texto.textContent = input.value;
            tareaNueva.appendChild(texto);

            // creamos un contenedor para los iconos
            let iconos = document.createElement('div');
            iconos.classList.add('iconos');
            tareaNueva.appendChild(iconos);

            // creamos un span para el icono de check, añadimos el icono de Google y añadimos un listener para completar la tarea
            let completar = document.createElement('span');
            completar.classList.add('material-icons', 'icono-completar');
            completar.textContent = 'check_circle';
            completar.addEventListener('click', completarTarea);

            // creamos un span para el icono de trash, añadimos el icono de Google y añadimos un listener para borrar la tarea
            let eliminar = document.createElement('span');
            eliminar.classList.add('material-icons', 'icono-eliminar');
            eliminar.textContent = 'delete';
            eliminar.addEventListener('click', eliminarTarea);

            // añadimos los iconos al contenedor, borramos el contenido del input y añadimos la tarea nueva a la lista
            iconos.append(completar, eliminar);
            input.value = '';
            listaDeTareas.appendChild(tareaNueva);
        } else {
            alert('Por favor, ingresa una tarea');
        }
    }

    function completarTarea(e) {
        // e.target => el icono clicado
        // e.target.parentNode => el contenedor de iconos
        // e.target.parentNode.parentNode => la tarea copleta
        // con .classList.toggle('completada') activamos/desactivamos la clase "completada"
        e.target.parentNode.parentNode.classList.toggle('completada');
    }

    function eliminarTarea(e) {
        // .remove() => eliminamos la tarea
        e.target.parentNode.parentNode.remove();
    }
});