const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const todo2 = document.getElementById("todo2");

form.addEventListener("submit",(event) => {
    event.preventDefault();
    addTasks();
})

let tasks = [];

function addTasks() {
    const task = input.value;
    if (!task) {
        alert("Please enter a task before submitting")
    } else {
        tasks.push ({
            task: task,
            completed: false,
        });
        localStorage.setItem("tasks", JSON.stringify(tasks))
        render();
    }
}

const render = () => {
    todo2.innerHTML = null;
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = tasks[i].task;
        todo2.appendChild(li);
        
        const div = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        div.appendChild(checkbox);
        li.appendChild(div);
        checkbox.addEventListener('click', (event) => {
            tasks[i].completed = event.target.checked;
            if (tasks[i].completed === true) {
                li.classList.add('completed');
                li.classList.remove('uncompleted');
                checkbox.checked = tasks[i].completed;
            } else {
                li.classList.remove('completed');
                li.classList.add('uncompleted');
                checkbox.checked = tasks[i].completed;
            }
        })
    }
};

const taskRemove = () => {
    const a = document.getElementsByClassName("completed");
    for (let i = 0; i < tasks.length; i++) {
        todo2.removeChild(a[i]);
    }
}



