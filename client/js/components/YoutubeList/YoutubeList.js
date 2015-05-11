import React from 'react';
import Video from './Video.js';


export default React.createClass({
  setVideo( video ) {
    this.props.setVideo(video);
  },
  getVotes( video ) {
    this.props.getVotes(video);
  },

  render() {
    let list;
    if( this.props.videos.length ) {
      list = this.props.videos.map(( video ) => {
        return (
          <Video video={video}
            getVotes={this.getVotes}
            setVideo={this.setVideo}></Video>
        )
      });

    } else {
      list = <h4>No videos</h4>
    }

    return (

      <div className="col-sm-5">
              {list}
      </div>

    );
  }
});


