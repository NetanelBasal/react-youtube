import Blog from '../flux';
import PostsActions from '../actions/PostsActions';

class PostsStore {
  constructor() {
    this.posts = [];
    this.bindListeners({
      getPosts: PostsActions.getPosts
    });
  }

  getPosts(posts) {
    this.posts = posts;
  }

}


module.exports = Blog.createStore(PostsStore, 'PostsStore');