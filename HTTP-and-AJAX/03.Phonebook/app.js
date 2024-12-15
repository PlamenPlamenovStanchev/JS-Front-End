function loadContacts(baseURL, onSucces){
    fetch(baseURL)
    .then(response => response.json())
    .then(onSucces)
    .catch(error => console.error('Error: ', error));
}

function createContact(baseURL, constact, onSucces){
    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(constact)
    })
    .then(response => response.json())
    .then(onSucces)
    .catch(error => console.error('Error: ', error));
}

function deleteConatct(baseURL, constact, onSucces){
    fetch(baseURL + '/' + constact._id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(onSucces)
    .catch(error => console.error('Error: ', error));
}

function createElement(tag, properties, container = null){

    const element = document.createElement(tag);

    Object.keys(properties).forEach(key =>{
        if ( typeof properties[key] === 'object'){
            Object.assign(element.dataset, properties[key])
        } else {
            element[key] = properties[key];
        }
    });
    if (container) container.append(element);
    return element;
}

function init(){

    const baseURL = 'http://localhost:3030/jsonstore/phonebook';

    const buttonLoadEl = document.querySelector('#btnLoad');
    const buttonCreateEl = document.querySelector('#btnCreate');
    const phonebookEl = document.querySelector('#phonebook');

    function createEntry({ person, phone, _id}){
       createElement(
        'button',
        { 
            textContent: 'Delete',
             onclick: deleteEntryHandler
        },
        createElement(
            'li',
            {
                 textContent: `${person}: ${phone}`,
                 dateset: { person, phone, _id }
            },
            phonebookEl
        )

       );
       
    }

    function deleteEntry(contact){
        phonebookEl.querySelector(`li[data-_id="${contact._id}"]`).remove();
    }

    function createEntryHandler(e){

        const inputs = document.querySelectorAll('input[type="text"][id]');

        const [ person, phone ] = [...inputs].map(field => field.value);

        if ( ! person || ! phone ) return;
        
        const conact = { person, phone };

        createContact(baseURL, conact, (result) => {
            createEntry(result);
        });
    }

    function deleteEntryHandler(e){
        entryEL = e.targer.closest('li');
        
        const contact = Object.assign({}, entryEL.dataset);

        deleteConatct(baseURL, contact, (result) =>{
            deleteEntry(result);
        });
    }

    loadContacts(baseURL, (result) =>{
        Object.values(result).forEach(createEntry);
    });
    
    buttonCreateEl.addEventListener('click', createEntryHandler);
}

document.addEventListener('DOMContentLoaded', init);