import ItemsController from './itemsController.js';

const itemsController = new ItemsController();

const postsContainer = document.querySelector('.list-posts');
const baseCard = document.getElementById('main-card');

const addPostCard = (post) => {
  let newCard = baseCard.cloneNode(true);

  let postText = newCard.querySelector('.post-text');
  let postName = newCard.querySelector('.post-name');
  let postPic = newCard.querySelector('.post-pic');

  postText.innerHTML = post.description;
  postName.innerHTML = post.name;
  postPic.innerHTML = './images/adoption.jpeg'; //hardcoded values, change later

  // adds card to dom
  postsContainer.appendChild(newCard);
};

itemsController.addItem(
  'test name',
  'description or post text content',
  '.path/to/img',
  'C',
  Date()
);

addPostCard(itemsController._items[0]);
addPostCard(itemsController._items[0]);
addPostCard(itemsController._items[0]);
