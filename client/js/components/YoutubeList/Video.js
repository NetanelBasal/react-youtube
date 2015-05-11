import React from 'react';


export default React.createClass({
  setVideo( video ) {
    this.props.setVideo(video);
  },
  getVotes( video ) {
    this.props.getVotes(video);
  },
  getStatistics( video ) {
    if( video.statistics ) {
      return (
        <div>
          <p>Likes: {video.statistics.likeCount}</p>
          <p>Dislikes: {video.statistics.dislikeCount}</p>
        </div>
      )
    }
  },
  render() {

    return (

      <div className="media">

        <div className="media-left">
          <img src={this.props.video.snippet.thumbnails.default.url}/>
        </div>

        <div className="media-body">
          <button className="btn btn-info pull-right"
            onClick={this.setVideo.bind(null, this.props.video)}>Play</button>
          <h4 className="media-heading">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>

        <div>
          <button className="btn btn-default btn-xs pull-right"
            onClick={this.getVotes.bind(null, this.props.video)}>getVotes</button>
        </div>

            {this.getStatistics(this.props.video)}
      </div>

    );
  }
});


