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































/*// Create a new post, add it to postsController, and display it in the DOM
function addPostCard(post) {
      const postHtml =
      `<div class="card my-4" style="width: auto" id="main-card">
        <div class="card-body bg-light my-card">
          <div class="row"></div>
            <div class="col-2">
              <img
                src=${post.author}
                class="rounded-circle d-inline"
                style="width: 59px"
                alt="..."
              />
            </div>
            <div class="col-10">
              <p class="card-title d-inline post-name">
                ${post.name}
              </p>
              <p class="card-title text-muted post-time">
                ${post.createdAt}
              </p>
            </div>
          </div>

          <p class="card-text text-muted post-text">
            ${post.description}
          </p>
          <img
            src=${post.img}
            alt=""
            class="card-img post-pic"
          />
        </div>
      </div>`;
      const postsContainer = document.querySelector('.list-posts');
      postsContainer.innerHTML += postHtml;
};
// const addPostCard = (post) => {
//   let newCard = baseCard.cloneNode(true);
//   let postText = newCard.querySelector('.post-text');
//   let postName = newCard.querySelector('.post-name');
//   let postPic = newCard.querySelector('.post-pic');

//   postText.innerHTML = post.description;
//   postName.innerHTML = post.name;
//   postPic.innerHTML = './images/adoption.jpeg'; // hardcoded values, will change later

//   // Add the new card to the DOM
//   postsContainer.appendChild(newCard);
// };

// Add a new post to the DOM
// addPostCard(postsController._items[0]);
// addPostCard(postsController._items[0]);

// save sample posts to local storage
const saveSampleToLocalStorage = () => {
  if (!localStorage.getItem('posts')) {
    const samplePosts = [
      { 'name': 'test name 1',
        'description': 'description or post text content',
        'img': '../images/dog_main.png',
        'author': '../images/dog_main.png',
        'createdAt': 'test date'},
      {'name': 'test name 2',
        'description': 'description or post text content',
        'img': '../images/dog_main.png',
        'author': '../images/dog_main.png',
        'createdAt': 'test date'}
      ];
    localStorage.setItem('posts', JSON.stringify(samplePosts));
  }
} 

// load posts from PostsController and display them in the DOM
// const loadPostsFromPostsController = () => {
//   postsController._posts.forEach(post => addPostCard(post));
// }

function loadPostsFromPostsController () {
  for (let i = 0; i < postsController._posts.length; i++) {
    addPostCard(postsController._posts[i]);
  }
}


// addPostCard({name: 'test name', description: 'description or post text content', img: './images/member-1.png', author: './images/member-1.png', createdAt: 'test date'});

// addPostCard({name: 'test name', description: 'description or post text content', img: './images/member-1.png', author: './images/member-1.png', createdAt: 'test date'});

// save sample posts to local storage
saveSampleToLocalStorage();
// load posts from local storage
postsController.loadPostsFromLocalStorage();
// display posts to the DOM
loadPostsFromPostsController();


console.log(postsController._posts);



export {addPostCard, saveSampleToLocalStorage, loadPostsFromPostsController};
*/