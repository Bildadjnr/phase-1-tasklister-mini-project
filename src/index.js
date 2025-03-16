document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");

  const submit = document.getElementById("submit");

  let taskUl = document.getElementById("tasks");

  let taskList = [];
  
  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    taskList.push(taskInput);

    const newTask = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x"
    taskUl.style.position = "relative";

    newTask.textContent = taskInput.value;

    taskUl.appendChild(newTask);
    taskInput.value = "";
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      taskUl.removeChild(newTask)
    })
  })
});


