import { todosStorage } from '../index.js'; // eslint-disable-line
// ########################## Check if task completed or not
export default function completedTask(e) {
  const chekItem = e.target;
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
