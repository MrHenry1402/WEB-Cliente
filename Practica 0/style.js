document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-name');
    const pendingTasksList = document.getElementById('pending-tasks-list');
    const completedTasksList = document.getElementById('completed-tasks-list');

    // Función para añadir tarea
    addButton.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (taskName === '') return;

        // Crear la nueva tarea
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');

        const taskText = document.createElement('span');
        taskText.textContent = taskName;
        taskItem.appendChild(taskText);

        // Crear el botón de completar
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        completeButton.onclick = () => completeTask(taskItem);
        taskItem.appendChild(completeButton);

        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteTask(taskItem);
        taskItem.appendChild(deleteButton);

        // Añadir la tarea a la lista de tareas pendientes
        pendingTasksList.appendChild(taskItem);

        // Limpiar el campo de texto
        taskInput.value = '';
    });

    // Función para marcar la tarea como completada (tacharla)
    function completeTask(taskItem) {
        const taskText = taskItem.querySelector('span');
        taskText.classList.add('completed'); // Tachar el texto

        // Eliminar el botón de completar
        const completeButton = taskItem.querySelector('button');
        completeButton.remove(); // Eliminar el botón de completar

        // Mover la tarea a la lista de completadas
        const completedTasksList = document.getElementById('completed-tasks-list');
        completedTasksList.appendChild(taskItem);
    }

    // Función para eliminar la tarea
    function deleteTask(taskItem) {
        taskItem.remove(); // Eliminar la tarea
    }
});
