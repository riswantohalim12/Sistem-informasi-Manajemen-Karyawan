const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


document.getElementById('addEmployeeBtn').onclick = function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('employeeForm').style.display = 'block';
};

document.getElementById('closeFormBtn').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('employeeForm').style.display = 'none';
};

document.getElementById('overlay').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('employeeForm').style.display = 'none';
};



