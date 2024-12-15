document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.querySelector('#task-input');
   const contentEl =document.querySelector('#content');

   formEl.addEventListener('submit', (e) =>{
      e.preventDefault();

      const sections = formEl.querySelector('input[type="text"]').value.split(', ');

      sections.forEach(el =>{
         const newDevEl = document.createElement('div');
         const newPEl = document.createElement('p');

         newPEl.textContent = el;
         newPEl.style.display = 'none';

         newDevEl.append(newPEl);
         newDevEl.addEventListener('click', (e) => {
            e.target.querySelector('p').style.display = 'block';
         });

         contentEl.append(newDevEl);
   
      });
   });
}