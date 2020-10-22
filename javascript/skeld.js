const admin = document.querySelector('.admin-task');
const exitTask = document.querySelector('.exit-task');
const adminTask = document.querySelector('.admin-task-shown');

const opened = document.querySelector('.tablet-tasks');

exitTask.addEventListener('click', () => {
    opened.style.display = 'flex';
    adminTask.style.display = 'none';
})

admin.addEventListener('click', () => {
    opened.style.display = 'none';
    adminTask.style.display = 'block';
});