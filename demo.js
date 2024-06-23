document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const submitButton = document.getElementById('submitButton');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Load initial data from localStorage
    let items = JSON.parse(localStorage.getItem('items')) || [];
    updateTable();

    // Form validation
    itemForm.addEventListener('input', () => {
        submitButton.disabled = !itemForm.checkValidity();
    });

    // Handle form submission
    itemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = document.getElementById('itemId').value;
        const name = document.getElementById('itemName').value;
        const price = document.getElementById('itemPrice').value;

        const item = { id, name, price };
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
        updateTable();
        itemForm.reset();
        submitButton.disabled = true;
    });

    function updateTable() {
        // Clear the existing table
        dataTable.innerHTML = '';
        // Populate the table with data from localStorage
        items.forEach(item => {
            const row = dataTable.insertRow();
            row.insertCell(0).textContent = item.id;
            row.insertCell(1).textContent = item.name;
            row.insertCell(2).textContent = item.price;
        });
    }
});