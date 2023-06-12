import {
  addOptionsToTable,
  deleteRow,
  editRow,
  clearInputs
} from './AddedTable.js';

const personData = [];
let editingRow = null;

function submitForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const rollNo = document.getElementById('rollNo').value;
  const messageElement = document.getElementById('Message');
  const tbody = document.querySelector('tbody');
  const rows = tbody.getElementsByTagName('tr');
  let isRollNoExist = false;

  const showMessage = (text, bgColor = '') => {
    messageElement.innerText = text;
    messageElement.style.textAlign = 'center';
    messageElement.style.display = 'block';
    messageElement.style.backgroundColor = bgColor;
    setTimeout(() => {
      messageElement.innerText = '';
      messageElement.style.display = 'none';
      messageElement.style.backgroundColor = ''; // Reset the background color
      clearInputs();
    }, 1000);
  };

  if (firstName === '' || lastName === '' || rollNo === '') {
    showMessage('Please fill in all fields.');
    return false;
  }

  // Check if roll number already exists
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const existingRollNo = row.getElementsByTagName('td')[2].textContent;
    if (existingRollNo === rollNo) {
      isRollNoExist = true;
      break;
    }
  }

  if (isRollNoExist) {
    showMessage('RollNo already exists in the table.');
    return false;
  }

  if (editingRow) {
    // Editing an existing row
    const firstNameCell = editingRow.getElementsByTagName('td')[0];
    const lastNameCell = editingRow.getElementsByTagName('td')[1];
    const rollNoCell = editingRow.getElementsByTagName('td')[2];

    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    rollNoCell.textContent = rollNo;

    editingRow = null;
  } else {
    // Save person's information to the array
    personData.push({ firstName, lastName, rollNo });

    // Add options to the table
    addOptionsToTable(firstName, lastName, rollNo);
    showMessage('Completed', 'green');
  }

  clearInputs();
  return false;
}

window.submitForm = submitForm;
window.editRow = editRow;
window.deleteRow = deleteRow;
