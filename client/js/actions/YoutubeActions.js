import flux from '../flux';
import config from '../config.js';
class YoutubeActions {

  searchVideos( query ) {
    $.ajax({
      url : config.URL_API,
      data: {
        part      : 'id,snippet',
        fields    : 'items/id/videoId,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default',
        maxResults: '5',
        key       : config.API_KEY,
        q         : query
      }
    }).then(( data ) => {
      this.dispatch(data.items);
    });

  }

  setVideo( video ) {
    this.dispatch(video);
  }

  getVotes( video ) {
    if( video.statistics ) return;
    $.ajax({
      url : config.VIDEO_API,
      data: {
        id    : video.id.videoId,
        part  : 'statistics',
        fields: 'items/statistics/likeCount,items/statistics/dislikeCount',
        key   : config.API_KEY
      }
    }).then(( res ) => {
      this.dispatch({ video: video, statistics: res.items[0].statistics })
    });
  }

}

module.exports = flux.createActions(YoutubeActions);