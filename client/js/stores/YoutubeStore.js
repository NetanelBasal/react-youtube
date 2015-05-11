import flux from '../flux';
import YoutubeActions from '../actions/YoutubeActions.js';
import config from '../config.js';

class YoutubeStore {
  constructor() {
    this.videos = [];
    this.video = null;

    this.bindListeners({
      searchVideos: YoutubeActions.searchVideos,
      setVideo    : YoutubeActions.setVideo,
      setVotes    : YoutubeActions.getVotes
    });
  }

  searchVideos( videos ) {
    this.videos = videos.filter(( video ) => {
      return video.id;
    });
    this.setVideo(this.videos[0]);
  }

  setVideo( video ) {
    this.videos.forEach(( video ) => {
      video.active = false;
    });
    video.active = true;
    video.src = config.YOUTUBE_URL + video.id.videoId;
    this.video = video;
  }

  setVotes( data ) {
    this.videos.forEach(( video ) => {
      if( video === data.video ) {
        video.statistics = data.statistics;
      }
    })
  }

}

module.exports = flux.createStore(YoutubeStore, 'YoutubeStore');