const form = document.querySelector('form');
const todoList = document.createElement('ul');
form.append(todoList);
todoList.setAttribute('id','todo-list');

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  const newtodo = document.createElement("li");
  let alltodo = [];
  list.append(newtodo);
  todos.forEach(element => {
    alltodo.push(`<li>Task Name: ${element.task} Progress Status: ${element.completed}</li><button>Delete</button>`);
  });
  newtodo.innerHTML=`${alltodo.join('')}`;
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
const addtaskButton = document.querySelector('button');
addtaskButton.addEventListener('click', addNewTodo);

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  const todoinput = document.querySelector('input');
  const form = document.querySelector('#todo-list');
  const newlistitem = document.createElement('li');

  form.append(newlistitem);
  newlistitem.innerHTML = `<li>Task Name: ${todoinput.value} Progress Status: false</li><button>Delete</button>`
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

function deleteAllCompletedTodos() {
  // Write your code here...
}
