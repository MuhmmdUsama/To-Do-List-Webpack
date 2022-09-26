import {// eslint-disable-line
  todosStorage,
  title,
  submit,
} from '../index.js';

// Update Data
export default function updateData(index) {
  title.value = todosStorage[index].description;
  submit.innerHTML = 'Update';
}
