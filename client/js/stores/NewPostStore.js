import Blog from '../flux';
import PostsActions from '../actions/PostsActions';

class NewPostsStore {
  constructor() {
    this.title = '';
    this.body = '';
    this.postStatus = null;

    this.bindListeners({
      createPost: PostsActions.createPost
    });
  }

  createPost(res) {
    if(res.add) {
      Materialize.toast('<span>post added successfully</span>', 5000);
      this.postStatus = {
        message:'post added successfully',
        className: 'success'
      }
    } else {
      this.postStatus = {
        message:'post not added successfully',
        className: 'failed'
      }
    }

  }


}


module.exports = Blog.createStore(NewPostsStore, 'NewPostsStore');