import Blog from '../flux';
import AuthActions from '../actions/AuthActions';

class RegisterStore {
  constructor() {
    this.user = {};
    this.bindListeners({
       register: AuthActions.register
    });
  }

   register(user) {
    console.log(user);
   }

}


module.exports = Blog.createStore(RegisterStore, 'RegisterStore');