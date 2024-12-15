function deleteByEmail() {
   const inputEl = document.querySelector('input[name="email"]');
   const searchStr = inputEl.value.toLocaleLowerCase();
   const people = document.querySelectorAll('table tbody tr td:nth-child(2)');
   const resultEl = document.querySelector('#result');

   if (searchStr == '') return;

   const [ matchedEl ] = [...people].filter(person =>{
    return person.textContent.toLocaleLowerCase().includes(searchStr)

   });
   if (matchedEl){
    matchedEl.parentElement.remove();
    resultEl.textContent = 'Deleted.';
   } else{
    resultEl.textContent = 'Not Found.';
   }
   inputEl.value = '';

}
