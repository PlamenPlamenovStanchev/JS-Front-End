document.addEventListener('DOMContentLoaded', solve);

function solve() {
    function sectionFocusEventHandler(event){
        event.target.parentElement.classList.add('focused');
    }
    function sectionBluredEventHandler(event){
        event.target.parentElement.classList.remove('focused');
    }

    const inputFields = document.querySelectorAll('input[type="text"]');

    [...inputFields].forEach(el =>{
        el.addEventListener('focus', sectionFocusEventHandler);
        el.addEventListener('blur', sectionBluredEventHandler);
    })
}