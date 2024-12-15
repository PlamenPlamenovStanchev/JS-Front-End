window.addEventListener("load", solve);

function solve() {

    function createElement(tag, properties, container) {
        const element = document.createElement(tag);

        Object.keys(properties).forEach(key => {
            if ( typeof properties[key] === 'object' ) {
                Object.assign(element[key], properties[key]);
            } else {
                element[key] = properties[key];
            }
        });

        if ( container ) container.append(element);

        return element;
    }

    const inputs = [...document.querySelectorAll('form.registerEvent input')];
    
    const btnAddEl = document.querySelector('#next-btn');

    const listCheckEl = document.querySelector('#preview-list');
    const eventListEl = document.querySelector('#event-list');

    btnAddEl.addEventListener('click', addHandler);

    function createEntry({ email, event, location }) {
        const entryEl = createElement('li', { className: 'preview-list', dataset: { email, event, location }}, listCheckEl);
        const articleEl = createElement('article', {}, entryEl);
        createElement('p', { textContent: email }, articleEl);
        createElement('p', { textContent: event }, articleEl);
        createElement('p', { textContent: location }, articleEl);
        createElement('button', { onclick: editHandler, className: 'action-btn edit', textContent: 'edit' }, entryEl);
        createElement('button', { onclick: confirmHandler, className: 'action-btn apply', textContent: 'apply' }, entryEl);
    }

    function addHandler(e) {
        e.preventDefault();

        const [ email, event , location ] = inputs.map(field => field.value);

        if ( ! email || ! event || ! location ) return;

        createEntry({email, event, location });
        
        inputs.forEach(field => field.value = '');

        btnAddEl.disabled = true;
    }

    // function clearHandler(e) {
    //     e.preventDefault();

    //     listWishEl.innerHTML = '';
    // }

    function editHandler(e) {
        e.preventDefault();

        const entryEl = e.target.closest('li');
        const values = Object.values(entryEl.dataset);

        inputs.forEach((field, index) => field.value = values[index]);
        
        entryEl.remove();

        btnAddEl.disabled = false;
    }

    function confirmHandler(e) {
        e.preventDefault();

        const entryEl = e.target.closest('li');

        entryEl.remove();

        entryEl.querySelectorAll('button').forEach(btn => btn.remove());

        eventListEl.append(entryEl);


        btnAddEl.disabled = false;
    }  
}  