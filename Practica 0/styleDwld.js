document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-btn');
    const todoList = document.getElementById('todo-list');

    // Función para obtener y mostrar las tareas
    function fetchAndDisplayTasks() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                // Mostrar solo los primeros 10 elementos
                const tasks = data.slice(0, 10);

                // Limpiar la lista antes de agregar las nuevas tareas
                todoList.innerHTML = '';

                // Añadir las tareas al DOM
                tasks.forEach(task => {
                    const listItem = document.createElement('li');
                    listItem.textContent = task.title; // Muestra el título de la tarea
                    todoList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }

    // Función para descargar las tareas
    function downloadTasks() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                const tasks = data.slice(0, 10); // Obtener solo los primeros 10

                // Crear un archivo JSON con las tareas
                const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'todo-list.json';
                link.click(); // Hacer clic en el enlace para iniciar la descarga
            })
            .catch(error => console.error('Error downloading tasks:', error));
    }

    // Mostrar las tareas cuando se carga la página
    fetchAndDisplayTasks();

    // Asignar la función de descarga al botón
    downloadButton.addEventListener('click', downloadTasks);
});
