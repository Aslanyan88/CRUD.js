export function addOptionsToTable(firstName, lastName, rollNo) {
  const tbody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  const tdFirstName = document.createElement('td');
  tdFirstName.textContent = firstName;
  const tdLastName = document.createElement('td');
  tdLastName.textContent = lastName;
  const tdRollNo = document.createElement('td');
  tdRollNo.textContent = rollNo;
  const tdOptions = document.createElement('td');
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.onclick = () => editRow(tbody.children.length - 1); // Pass the index of the newly added row
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => deleteRow(tbody.children.length - 1); // Pass the index of the newly added row

  tdOptions.appendChild(editButton);
  tdOptions.appendChild(deleteButton);
  newRow.appendChild(tdFirstName);
  newRow.appendChild(tdLastName);
  newRow.appendChild(tdRollNo);
  newRow.appendChild(tdOptions);

  tbody.appendChild(newRow);
}


export  function deleteRow(index) {
  const tbody = document.querySelector('tbody');
  const row = tbody.getElementsByTagName('tr')[index];
  row.remove();
}


export function editRow(index) {
  const tbody = document.querySelector('tbody');
  const row = tbody.getElementsByTagName('tr')[index];

  const firstName = row.getElementsByTagName('td')[0].textContent;
  const lastName = row.getElementsByTagName('td')[1].textContent;
  const rollNo = row.getElementsByTagName('td')[2].textContent;

  document.getElementById('firstName').value = firstName;
  document.getElementById('lastName').value = lastName;
  document.getElementById('rollNo').value = rollNo;

  editingRow = row;
}
export function clearInputs() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('rollNo').value = '';
}
