import './index.css';
import { deleteDataTodoRow } from './moduls/delete.js'; // eslint-disable-line
import updateData from './moduls/update.js'; // eslint-disable-line
import showData from './moduls/read.js'; // eslint-disable-line

export const title = document.getElementById('title'), // eslint-disable-line
  submit = document.getElementById('submit'),
  updateDeleteItem = document.querySelector('.todo-tbody'),
  clearDone = document.getElementById('clear-done');

export let mood = 'creat'; // eslint-disable-line
export let temp; // eslint-disable-line
let chekItem;

// ########################## Data Storage ####
export let todosStorage = JSON.parse(localStorage.getItem('task')) || []; // eslint-disable-line

// ########################## Create Data #####
function submitDatatodos(e) {
  e.preventDefault();
  const newTodo = {
    description: title.value.toLowerCase(),
    completed: false,
    index: todosStorage.length + 1,
  };

  if (title.value !== '') {
    // check if create or update mood is On
    if (mood === 'creat') {
      todosStorage.push(newTodo);
    } else {
      todosStorage[temp] = newTodo;
      submit.innerHTML = '<i class="bi-box-arrow-down"></i>';
      mood = 'creat';
    }
    clearDataInput(); // eslint-disable-line
  }

  localStorage.setItem('task', JSON.stringify(todosStorage));
  showData(); // eslint-disable-line
  title.focus();
}

// ########################## Read Data
showData();

// ########################## Check if task completed or not
function completedTask(e) {
  chekItem = e.target;
  if (chekItem.classList.contains('check')) {
    const checkLocation = chekItem.accessKey;
    chekItem.classList.toggle('done');
    if (chekItem.classList.contains('done')) {
      todosStorage[checkLocation].completed = true;
    } else {
      todosStorage[checkLocation].completed = false;
    }
    localStorage.setItem('task', JSON.stringify(todosStorage));
  }
}

// ########################## Clear All Done Tasks
function clearAllDone() {
  todosStorage = todosStorage.filter((e) => e.completed !== true);
  localStorage.setItem('task', JSON.stringify(todosStorage));
  showData();
}

// ########################## Clear Data Input ####
function clearDataInput() {
  title.value = '';
}

// ########################## EventListener ####
submit.addEventListener('click', submitDatatodos);

updateDeleteItem.addEventListener('click', (e) => {
  if (e.target.classList.contains('trashBtn')) {
    deleteDataTodoRow(e.target.accessKey);
  } else if (e.target.classList.contains('updateBtn')) {
    title.focus();
    mood = 'update';
    updateData(e.target.accessKey);
    temp = e.target.accessKey;
  }
});

updateDeleteItem.addEventListener('click', (e) => {
  completedTask(e);
  showData();
});

clearDone.addEventListener('click', clearAllDone);
