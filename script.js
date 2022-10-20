//Getting all required elements

const inputField = document.querySelector('.input-field textarea'),
	todoList = document.querySelector('.todoList'),
	pendingNum = document.querySelector('.pending-num'),
	clearButton = document.querySelector('.clear-button');

//we will call this function while adding, deleting and checking-unchecking the tasks
function allTask() {
	let tasks = document.querySelectorAll('.pending');
	pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

	let allList = document.querySelectorAll('.list');
	if (allList.length > 0) {
		todoList.style.marginTop = "20px";
		clearButton.style.pointerEvents = "auto";
		return;
	}
	todoList.style.marginTop = "0px";
	clearButton.style.pointerEvents = "none";
}


// add task while we put value in text area and press enter

inputField.addEventListener('keyup', (e) => {
	let inputValue = inputField.value.trim();

	// if enter button is clicked and inputted value length is bigger than 0
	if (e.key === 'Enter' && inputValue.length > 0) {
		let liTag = `<li class="list pending" onclick="handleStatus(this)">
						<input type="checkbox">
						<span class="task">${inputValue}</span>
						<i class="uil uil-trash" onclick="deleteTask(this)"></i>
					</li>`;
		//inserting li tag inside the todoList div
		todoList.insertAdjacentHTML("beforeend", liTag);
		inputField.value = ""; //removing value from input field
		allTask();
	}
});

//checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
	const checkbox = e.querySelector("input"); //getting checkbox
	checkbox.checked = checkbox.checked ? false : true;
	e.classList.toggle('pending');
	allTask();
}

//deleting task when we click on the delete icon
function deleteTask(e) {
	e.parentElement.remove(); //getting parent element and remove it
}

//deleting all the tasks when we click on the button clear
clearButton.addEventListener("click", () => {
	todoList.innerHTML = "";
	allTask();
});