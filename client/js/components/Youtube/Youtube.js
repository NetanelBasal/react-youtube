import React from 'react';
import YoutubeStore from '../../stores/YoutubeStore';
import YoutubeActions from '../../actions/YoutubeActions';
import addons from 'react-addons';
import YoutubeSearch from '../YoutubeSearch/YoutubeSearch';
import YoutubeList from '../YoutubeList/YoutubeList';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';

export default React.createClass({

  getInitialState() {
    return YoutubeStore.getState();
  },
  onChange() {
    this.setState(YoutubeStore.getState());
  },
  componentDidMount() {
    YoutubeStore.listen(this.onChange);
  },
  componentWillUnmount() {
    YoutubeStore.unlisten(this.onChange);
  },
  onSearch( query ) {
    YoutubeActions.searchVideos(query);
  },
  setVideo( video ) {
    YoutubeActions.setVideo(video);
  },
  getVotes( video ) {
    YoutubeActions.getVotes(video);
  },
  render: function() {
    return (

      <div className="container">
        <div className="row">
          <YoutubeSearch onSearch={this.onSearch}></YoutubeSearch>
          <YoutubeList videos={this.state.videos}
            setVideo={this.setVideo}
            getVotes={this.getVotes}></YoutubeList>
          <YoutubeVideo video={this.state.video}></YoutubeVideo>
        </div>
      </div>

    );
  }
});


