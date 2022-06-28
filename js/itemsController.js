class ItemsController {
  constructor(currentId = 0) {
    this._items = [];
    this._currentId = currentId;
  }

  addItem(name, description, img, author, createdAt) {
    const item = {
      id: this._currentId++,
      name,
      description,
      img,
      author,
      createdAt,
    };
    this._items.push(item);
  }

  localStorage() {
    const storageItems = localStorage.getItem('items');
    if (storageItems) {
      const items = JSON.parse(storageItems);
      items.forEach((item) => {
        this.addItem(
          item.name,
          item.description,
          item.img,
          item.author,
          item.createdAt
        );
      });
    }
  }
}

const newPost = new ItemsController();
console.log(newPost.addItem('A', 'B', 'img', 'C', 'Jan 1, 2020'));

export default ItemsController;
