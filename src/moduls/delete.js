import { todosStorage } from '../index.js'; // eslint-disable-line
import showData from './read.js'; // eslint-disable-line

// Clear Data
export function deleteDataTodoRow(index) {
  todosStorage.splice(index, 1);
  localStorage.setItem('task', JSON.stringify(todosStorage));
  showData();
}

// Clear All Data
export function deleteAll(value) {
  const deleteAll = document.querySelector('.delete-all');
  deleteAll.innerHTML = `
      <button id="delete-all" class="${value}" >Reset (${todosStorage.length})</button>`;

  document.getElementById('delete-all').addEventListener('click', () => {
    localStorage.setItem('task', JSON.stringify([]));
    todosStorage.splice(0);
    showData();
  });
}
