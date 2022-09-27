import { todosStorage } from '../index.js'; // eslint-disable-line
import { deleteAll } from './delete.js'; // eslint-disable-line

// Read Data
function showData() {
  let todoTable = '';
  todosStorage.forEach((e, index) => {
    e.index = index;
    todoTable += `
        <tr class = 'table-row ${todosStorage[index].completed === false ? '' : 'done'}'>
              <td id = "td-id">${index + 1}</td>
              <td><i class="bi-check2 check ${todosStorage[index].completed === false ? '' : 'done green'}" accessKey="${index}"></i></td>
              <td class ='todo-title line-break'>${e.description}</td>
              <td><button id="update" class="bi bi-pencil-square updateBtn" accessKey="${index}"></button></td>
              <td><button id="delete" class="bi bi-trash trashBtn" accessKey="${index}"></button></td>
        </tr>
              `;
  });

  document.getElementById('todo-tbody').innerHTML = todoTable;

  if (todosStorage.length > 0) {
    deleteAll('show');
  } else {
    deleteAll('none');
    localStorage.clear();
    const tableBody = document.querySelector('.todo-tbody');
    tableBody.innerHTML = `
    <tr>
          <td id = "td-id">Zero</td>
          <td></td>
          <td class ='todo-title'>NOTHING TO-DO</td>
          <td>-</td>
          <td>-</td>
    </tr>
          `;
  }
}

export default showData;
