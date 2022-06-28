// Initialize a new TaskManager with currentId set to 0
const newPost = new ItemsController(0);

const addItemCard = function (item) {
  const itemCard = document.getElementById('list-items');
  itemCard.innerHTML = `
        <div class="item-card__img">
        <img src="${item.img}" alt="${item.name}">
        </div>
        <div class="item-card__info">
        <h3 class="item-card__name">${item.name}</h3>
        <p class="item-card__description">${item.description}</p>
        <p class="item-card__author">${item.author}</p>
        <p class="item-card__created-at">${item.createdAt}</p>
        </div>
    `;
  itemCard.appendChild(itemCard);
};

const localStorage = function () {
  const storageItems = localStorage.getItem('items');
  if (storageItems) {
    const items = JSON.parse(storageItems);
    items.forEach((item) => {
      addItemCard(item);
    });
  }
};
localStorage();

const loadItemsFromLocalStorage = function () {
  const storageItems = localStorage.getItem('items');
  if (storageItems) {
    const items = JSON.parse(storageItems);
    items.forEach((item) => {
      newPost.addItem(
        item.name,
        item.description,
        item.img,
        item.author,
        item.createdAt
      );
    });
  }
};
loadItemsFromLocalStorage();

const loadCardListFromItemsController = function () {
  newPost.items.forEach((item) => {
    addItemCard(item);
  });
};
loadCardListFromItemsController();
