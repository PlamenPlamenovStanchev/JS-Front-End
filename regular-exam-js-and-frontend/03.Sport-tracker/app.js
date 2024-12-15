
const loadWorkoutButton = document.getElementById('load-workout');
const addWorkoutButton = document.getElementById('add-workout');
const editWorkoutButton = document.getElementById('edit-workout');
const listContainer = document.getElementById('list');
const workoutInput = document.getElementById('workout');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');

loadWorkoutButton.addEventListener('click', async () => {
    editWorkoutButton.disabled = true;
    const response = await fetch('http://localhost:3030/jsonstore/workout/');
    const data = await response.json();
    listContainer.innerHTML = '';
    data.forEach(workout => {
        const workoutElement = document.createElement('div');
        workoutElement.classList.add('container');
        workoutElement.innerHTML = `
            <h2>${workout.workout}</h2>
            <h3>${workout.date}</h3>
            <h3 id="location">${workout.location}</h3>
            <div id="buttons-container">
                <button class="change-btn">Change</button>
                <button class="delete-btn">Done</button>
            </div>
        `;
        listContainer.appendChild(workoutElement);
    });
    addEventListenersToButtons();
});

addWorkoutButton.addEventListener('click', async () => {
    const workout = workoutInput.value;
    const location = locationInput.value;
    const date = dateInput.value;
    const response = await fetch('http://localhost:3030/jsonstore/workout/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workout, location, date }),
    });
    const data = await response.json();
    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';
    loadWorkoutButton.click();
});

editWorkoutButton.addEventListener('click', async () => {
    const workout = workoutInput.value;
    const location = locationInput.value;
    const date = dateInput.value;
    const id = editingId;
    const response = await fetch(`http://localhost:3030/jsonstore/workout/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workout, location, date }),
    });
    const data = await response.json();
    loadWorkoutButton.click();
    addWorkoutButton.disabled = false;
    editWorkoutButton.disabled = true;
    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';
});

let editingId = null;

function addEventListenersToButtons() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    changeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentNode.parentNode;
            const workout = parent.querySelector('h2').textContent;
            const location = parent.querySelector('h3#location').textContent;
            const date = parent.querySelector('h3').textContent;
            parent.remove();
            editingId = parent.id;
            addWorkoutButton.disabled = true;
            editWorkoutButton.disabled = false;
            workoutInput.value = workout;
            locationInput.value = location;
            dateInput.value = date;
        });
    });
    deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const parent = button.parentNode.parentNode;
            const id = parent.id;
            const response = await fetch(`http://localhost:3030/jsonstore/workout/${id}`, {
                method: 'DELETE',
            });
            parent.remove();
            loadWorkoutButton.click();
        });
    });
}