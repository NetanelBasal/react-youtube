import React from 'react';
import addons from 'react-addons';


export default React.createClass({
  mixins: [addons.LinkedStateMixin],
  getInitialState() {
    return {
      query: '',
      error: false
    }
  },
  search(e) {
    e.preventDefault();
    if(!this.state.query) {
      alert('This field is required');
      return;
    }
    this.props.onSearch(this.state.query);
  },
  render() {

    return (
      <div className="row">
        <form name="search" onSubmit={this.search}>
          <div className="col-sm-9">
            <input className="form-control" valueLink={this.linkState('query')}  />
          </div>
          <div className="col-sm-3">
            <input className="btn btn-default" value="Search" type="submit" />
          </div>

        </form>



      </div>
    );
  }
});


