/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
 <div class="crud">
 <h2>Today's To-Do</h2>
 <form class="inputs">
   <input
     type="text"
     placeholder="Task-To-Do"
     id="title"
     class="inputField"
     required
   />
   <button id="submit" type="submit">
     <i class="bi-box-arrow-down"></i>
   </button>
 </form>
 
 <div class="outputs">
   <hr />
   <div class="table">
     <table>
       <tr class="table-head">
         <th>No</th>
         <th><i class="bi-check2-all"></i></th>
         <th class="task-head">Task-To-Do</th>
         <th class="upAndDelStyle bi bi-pencil-square"></th>
         <th class="upAndDelStyle bi bi-trash"></th>
       </tr>
       <tbody id="todo-tbody" class="todo-tbody"></tbody>
     </table>
   </div>
 
   <hr />
   <div class="clearDiv">
     <div class="delete-all"></div>
 
     <button id="clear-done" class="clear-done">
       Clear All Done <i class="bi-check2"></i>
     </button>
   </div>
 </div>
 </div>
 `;

const { todosStorage } = require('../index');
const { deleteDataTodoRow } = require('../moduls/delete');
const {updateData} = require('../moduls/update');

describe('test the Add and Delete items function', () => {
  test('Add Task', () => {
    // Arrange
    const newTask1 = {
      description: 'task1',
      completed: false,
      index: 1,
    };
    const newTask2 = {
      description: 'task2',
      completed: false,
      index: 2,
    };
    // Act
    todosStorage.push(newTask1);
    // Assert
    expect(todosStorage).toHaveLength(1);
    // Act
    todosStorage.push(newTask2);
    // Assert
    expect(todosStorage).toHaveLength(2);
    expect(todosStorage[1].description).toBe('task2');
  });
});

