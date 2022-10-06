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

const { todosStorage } = require('../index.js');

describe('test the clear all done Tasks function', () => {
  test('clear all done Tasks', () => {
    // Arrange
    const clearDone = jest.fn(() => todosStorage.filter((e) => e.completed !== true));

    const newTask1 = { description: 'task1', completed: true, index: 1 };

    const newTask2 = { description: 'task2', completed: true, index: 2 };

    const newTask3 = { description: 'task3', completed: false, index: 3 };

    const newTask4 = { description: 'task4', completed: false, index: 4 };
    // Act
    todosStorage.push(newTask1);
    todosStorage.push(newTask2);
    todosStorage.push(newTask3);
    todosStorage.push(newTask4);

    // Clearing all completed task
    const clearAllCompleted = clearDone();
    // Assert
    expect(clearAllCompleted[0].completed).toBeFalsy();
    expect(clearAllCompleted[1].completed).toBeFalsy();
    expect(clearAllCompleted).toHaveLength(2);
    expect(clearAllCompleted[0].description).toBe('task3');
    expect(clearAllCompleted[1].description).toBe('task4');
  });
});
