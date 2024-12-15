function init() {

    // Global variables

    // api -> resource, dom -> entry

    const baseUrl = 'http://localhost:3030/jsonstore/appointments/';

    const inputs = [...document.querySelectorAll('#car-model, #car-service, #date')];

    const btnAddEntryEl = document.querySelector('#add-appointment');
    const btnEditEntryEl = document.querySelector('#edit-appointment');

    const listEntriesEl = document.querySelector('#appointments-list');
    
    // attach event handlers

    btnAddEntryEl.addEventListener('click', createHandler);
    btnEditEntryEl.addEventListener('click', updateHandler);

    // DOM Functions

    function loadEntries() {
        listEntriesEl.innerHTML = '';

        loadResources(baseUrl, (result) => {
            Object.values(result).forEach(createEntry);
        });
    }

    function createEntry({ model, service, date, _id }) {
        const entryEl = createElement('li', { className: 'appointment', dataset: { model, service, date, _id }}, listEntriesEl);
        createElement('h2', { textContent: model }, entryEl);
        createElement('h3', { textContent: service }, entryEl);
        createElement('h3', { textContent: date }, entryEl);
        const buttonsEl = createElement('div', { className: 'buttons-appointment' }, entryEl);
        createElement('button', { textContent: 'Change', className: 'change-btn', onclick: changeHandler }, buttonsEl);
        createElement('button', { textContent: 'Delete', className: 'delete-btn', onclick: deleteHandler }, buttonsEl);
    }

    function deleteEntry({ model, service, date, _id }) {
        listEntriesEl.querySelector(`li[data-_id="${_id}"]`).remove();
    }

    // Event handlers

    function createHandler(e) {
        e.preventDefault();

        const [ model, service, date ] = inputs.map(field => field.value);

        if ( ! model || ! service || ! date ) return;

        const resourceObject = { model, service, date };

        console.log(resourceObject);

        createResource(baseUrl, resourceObject, (result) => {
            createEntry(result);
        });

        inputs.forEach(field => field.value = '');
    }

    function changeHandler(e) {
        const entryEl = e.target.closest('li');
        const values = Object.values(entryEl.dataset);

        inputs.forEach((field, index) => field.value = values[index]);

        entryEl.classList.add('active');

        btnAddEntryEl.disabled = true;
        btnEditEntryEl.disabled = false;
    }

    function updateHandler(e) {
        e.preventDefault();

        const [ model, service, date ] = inputs.map(field => field.value);

        if ( ! model || ! service || ! date ) return;

        const entryEl = listEntriesEl.querySelector('.active');

        const resourceObject = { model, service, date, _id: entryEl.dataset._id };

        updateResource(baseUrl, resourceObject, (result) => {
            loadEntries();
            inputs.forEach(field => field.value = '');
            btnAddEntryEl.disabled = false;
            btnEditEntryEl.disabled = true;
        });
    }

    function deleteHandler(e) {
        const entryEl = e.target.closest('li');
        const resourceObject = Object.assign({}, entryEl.dataset);
        
        deleteResource(baseUrl, resourceObject, deleteEntry);
    }

    loadEntries();
    
}

document.addEventListener('DOMContentLoaded', init);