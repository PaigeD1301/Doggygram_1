// create html for a new post
const createPostHtml = (name, description, imageUrl, createdAt) =>{
  const html =
      `<div class="card my-4" style="width: auto" id="main-card">
        <div class="card-body bg-light my-card">
          <div class="row"></div>
            <div class="col-2">
              <p>${name}</p>
            </div>
            <div class="col-10">
              <p class="card-title text-muted post-time">
                ${createdAt}
              </p>
            </div>
          </div>

          <p class="card-text text-muted post-text">
            ${description}
          </p>
          
          <img
            src=${imageUrl}
            alt=""
            class="card-img post-pic"/>   
        </div>
      </div>`;
  return html;
}

// create a class to manage the posts
export class PostsController {
  constructor(currentId = 0) {
    this._posts = [];
    this._currentId = currentId;
  }

  // add a post to the array of posts
  addPost(name, description, imageUrl, createdAt) {
    const post= {
      id: this._currentId++,
      name,
      description,
      imageUrl,
      createdAt,
    };
    this._posts.unshift(post); 

    this.save(name, description, imageUrl, createdAt)
  }

// display posts to the DOM
  render() {
    let postHtmlList = [];
    for (let i = 0; i < this._posts.length; i++) {
      const currentPost = this._posts[i];
      
      // create html for current post
      const currentPostHtml = createPostHtml(currentPost.name, currentPost.description, currentPost.imageUrl, currentPost.createdAt);

      // push current/formatted post to the postHtmlList array
      postHtmlList.push(currentPostHtml);
    }
    // convert the array of strings to a string
    const postsHtml = postHtmlList.join('\n');

    // display to the DOM
    document.querySelector('.list-posts').innerHTML = postsHtml;
  }
  
  // save the posts to local storage
  saveToLocalStorage () {
    localStorage.setItem('posts', JSON.stringify(this._posts));
  }

  // load posts from local storage
  load () {
    if (localStorage.getItem('posts')) {
      const postsJson = localStorage.getItem('posts');
      this._posts = JSON.parse(postsJson);
    }
  }

  // POST new post using fetch
  save(name, description, imageUrl, createdAt) {
    const data = {name, description, imageUrl, createdAt};
    fetch('http://localhost:8080/item', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
  }          
  // GET all posts using fetch

          

}
  



// update({name, description, img, author, createdAt}) {
//   // todo 

// };

// delete({name, description, img, author, createdAt}) {
//   // todo
// };

