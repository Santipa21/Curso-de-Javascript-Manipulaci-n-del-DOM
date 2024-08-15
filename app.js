// Declaración de variables globales
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");


taskForm.addEventListener("submit", (e) => {
    // Previene el comportamiento por defecto del formulario
  e.preventDefault();

  const taskInput = document.getElementById("task-input");
// Se obtiene el valor del campo de entrada
  const task = taskInput.value;
// Crea un nuevo elemento de tarea
  if (task) {
    taskList.append(createTaskElement(task));
    storeTaskInLocalStorage(task);
    // Se limpia el campo de entrada
    taskInput.value = "";
  }
});


const createTaskElement = (task) => {
  const li = document.createElement("li");
  li.textContent = task;
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li;
}

const createButton = (text, className) => {
  const btn = document.createElement("span");
  btn.textContent = text;
  btn.className = className;
  return btn;
}

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target.parentElement);
  } else if (event.target.classList.contains("edit-btn")) {
    editTask(event.target.parentElement);
  }
});

const deleteTask = (taskItem) => {
  if (confirm("Estás segura / seguro de borrar este elemento?")) {
    removeFromLocalStorage(taskItem.firstChild.textContent);
    taskItem.remove();
  }
}

const editTask = (taskItem) => {
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask;
    updateLocalStorage();
  }
}

const storeTaskInLocalStorage = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });
}

const updateLocalStorage = () => {
  const tasks = Array.from(taskList.querySelectorAll("li")).map(
    (li) => li.firstChild.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Llamado a la función loadTasks
loadTasks();

const removeFromLocalStorage = (taskContent) => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  const updateTasks = tasks.filter((task) => task !== taskContent);

  localStorage.setItem("tasks", JSON.stringify(updateTasks));
}

const themeToggleButton = document.getElementById("toggle-theme-btn");

const currentTheme = localStorage.getItem("theme");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const theme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});

if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}