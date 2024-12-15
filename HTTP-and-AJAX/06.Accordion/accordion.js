const apiUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
const accordionContainer = document.getElementById('main');

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    Object.keys(data).forEach(id => {
      const articleTitle = data[id];
      const accordionItem = createAccordionItem(id, articleTitle);
      accordionContainer.append(accordionItem);
    });

  })

.catch(error => console.error(error));

function createAccordionItem(id, title) {
  const accordionItem = document.createElement('div');
  accordionItem.className = 'accordion';

  const head = document.createElement('div');
  head.className = 'head';
  accordionItem.append(head);

  const titleSpan = document.createElement('span');
  titleSpan.textContent = title;
  head.append(titleSpan);

  const moreButton = document.createElement('button');
  moreButton.className = 'button';
  moreButton.id = id;
  moreButton.textContent = 'More';
  moreButton.dataset.articleId = id;
  head.append(moreButton);

  const extra = document.createElement('div');
  extra.className = 'extra';
  accordionItem.append(extra);

  moreButton.addEventListener('click', () => {
    if (moreButton.textContent === 'More') {
      fetch(`${apiUrl}/details/${moreButton.dataset.articleId}`)
      .then(response => response.json())
      .then(data => {
          extra.innerHTML = `<p>${data.content}</p>`;
          extra.classList.remove('extra');
          moreButton.textContent = 'Less';
        })
      .catch(error => console.error(error));
    } else {
      extra.classList.add('extra');
      moreButton.textContent = 'More';
    }
  });

  return accordionItem;
  
}
 