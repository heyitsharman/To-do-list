
// javascript file

// declaring variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


// adding event listener 
addTask.addEventListener("click", function () {
    let task = document.createElement("div");
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');   //creating checkbox
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('check-button');   
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('delete-button'); 
    task.appendChild(deleteButton);

    if (inputTask.value.trim() === '') { // Check for empty input
        alert('Please enter a task');
    } else {
        taskContainer.appendChild(task);
        inputTask.value = ''; // Clear input field
    }

    checkButton.addEventListener("click", function(){
        checkButton.parentElement.style.textDecoration='line-through';

    })

    deleteButton.addEventListener('click',function(){
        deleteButton.parentElement.remove();
    })
});