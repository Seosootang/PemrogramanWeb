const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let todos = [];

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todo = {
            id: Date.now(),
            text: todoText,
            isEditing: false
        };
        todos.push(todo);
        renderTodos();
        todoInput.value = '';
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function toggleEdit(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.isEditing = !todo.isEditing;
        }
        return todo;
    });
    renderTodos();
}

function updateTodo(id, newText) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.text = newText;
            todo.isEditing = false;
        }
        return todo;
    });
    renderTodos();
}

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

function showModal(text) {
    const modal = document.getElementById('todoModal');
    const modalText = document.getElementById('modalText');
    modalText.textContent = text;
    modal.style.display = 'block';
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        
        const todoTextSpan = document.createElement('span');
        todoTextSpan.className = 'todo-text';
        todoTextSpan.textContent = truncateText(todo.text, 30);
        todoTextSpan.addEventListener('click', () => showModal(todo.text));
        li.appendChild(todoTextSpan);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        if (todo.isEditing) {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = todo.text;
            li.replaceChild(input, todoTextSpan);

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.className = 'edit-button';
            saveButton.addEventListener('click', () => updateTodo(todo.id, input.value));
            buttonContainer.appendChild(saveButton);
        } else {
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-button';
            editButton.addEventListener('click', () => toggleEdit(todo.id));
            buttonContainer.appendChild(editButton);
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));
        buttonContainer.appendChild(deleteButton);

        li.appendChild(buttonContainer);
        todoList.appendChild(li);
    });
}

addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

window.onclick = function(event) {
    const modal = document.getElementById('todoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.querySelector('.close').onclick = function() {
    document.getElementById('todoModal').style.display = 'none';
}