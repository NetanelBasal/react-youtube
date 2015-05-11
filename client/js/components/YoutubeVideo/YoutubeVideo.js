import React from 'react';


export default React.createClass({

  render() {
    let data;
    if(this.props.video) {
       data = <div>
         <iframe src={this.props.video.src} frameborder="0"></iframe>
         <p><b>Currently playing</b>: {this.props.video.snippet.title}</p>
       </div>
    }
    return (
      <section className="col-sm-7">

        <div>
        {data}
        </div>

      </section>

    );
  }
});


