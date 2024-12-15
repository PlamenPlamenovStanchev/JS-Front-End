function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/blog';

    const selectPosts = document.querySelector('#posts');

    const postTitleEl = document.querySelector('#post-title');
    const postBodyEl = document.querySelector('#post-body');
    const postcommentEl = document.querySelector('#post-comments');

    document.querySelector('#btnLoadPosts').addEventListener('click', loadHandler);
    document.querySelector('#btnViewPost').addEventListener('click', viewHandler);

    function loadHandler (e){

        selectPosts.innerHTML = '';

        fetch(baseURL + '/posts')
        .then(response => response.json())
        .then(posts => {

            Object.values(posts).forEach(post => {

                const optionEl = document.createElement('option');

                Object.assign(optionEl.dataset, post);

                optionEl.textContent = posts.title;
                selectPosts.append( optionEl );
            });

        })
        .catch(error =>console.error('Error: ', error));
    }

    function viewHandler(e){

        fetch(baseURL + '/comments')
        .then(response => response.json())
        .then(comments => {

            console.log(comments);

            const optionEl = selectPosts.querySelector('option:checked');

            postTitleEl.textContent = optionEl.dataset.title;
            postBodyEl.textContent = optionEl.dataset.body;

            Object.values(comments).forEach(comment => {
                if (comment.postId === optionEl.dataset.id){
                    const commentEl = document.createElement('li');
                    commentEl.textContent = comment.text;
                    postcommentEl.append(commentEl);
                }
            });

        })
        .catch(error => console.error('Error: ', error));

    }

}

attachEvents();