function extractText() {
    const listElement = document.querySelectorAll('ul li');
    const textareaElement = document.querySelectorAll('#result');//('textarea')
    textareaElement.value = [...listElement].map(el => el.textContent.trim()).join('\n');
}