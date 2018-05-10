class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      currentIndex: 0
    };
  }


  //on click event
  //get key property from clicked dom object
  videoOnClick(event) {
    this.setState({ 
      currentIndex: event.target.getAttribute("id")
    });
  }

  getData(query) {
    $.ajax({
      method:'GET',
      url:'https://www.googleapis.com/youtube/v3/search',
      contentType: "application/jason; charset=utf-8",
      dataType: "json",
      data: {'key': window.YOUTUBE_API_KEY,'q': `${query}`, 'maxResults' : '5', 'videoEmbeddable' : 'true', 'type' : 'video', 'part': 'snippet'},
      success: function(data) {
        console.log(data);
        return data;
      }  
    });
  }

  render() {
    var data1 = this.getData('cat');
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={exampleVideoData[this.state.currentIndex]}/>
          </div>
          <div className="col-md-5" >
            <VideoList methods={this.videoOnClick.bind(this)} videos={exampleVideoData}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
