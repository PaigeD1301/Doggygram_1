import { PostsController } from './postsController.js';

// Create a new instance of the PostsController
const postsController = new PostsController();

// load posts from local storage
postsController.load();
// render posts from local storage to the DOM
postsController.render();

console.log(postsController._posts);


const form = document.querySelector('#new-post-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const postAuthor = event.target.querySelector('#author').value;
  const postText = event.target.querySelector('#post-text').value;
  const postImg = event.target.querySelector('#img-url').value;
  const postCreatedAt = new Date();

  if (!postAuthor || !postText || !postImg) {
    alert('Inputs cannot be blank')
  } else {
      // add user input values to postController._posts
      postsController.addPost(postAuthor, postText, postImg, postCreatedAt);

      // clear form value
      form.reset();
      
      // display posts to the DOM
      postsController.render();

      // save posts to local storage
      postsController.saveToLocalStorage();
    }
})


