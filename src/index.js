document.getElementById('create-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
     const taskValue = document.getElementById('new-task-description').value;
     if (taskValue.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;
        document.getElementById('tasks').appendChild(listItem);
        document.getElementById('new-task-description').value = "";
    }
});
