class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentIndex: 0,
      data: exampleVideoData,
    };
  }


  //on click event
  //get key property from clicked dom object
  videoOnClick(event) {
    this.setState({ 
      currentIndex: event.target.getAttribute('id'),
    });
  }

  searchOnClick() {
    var obj = {
      key: window.YOUTUBE_API_KEY,
      query: $('input').val(),
      max: 5
    };
    this.props.searchYouTube(obj, this.setState.bind(this));
  }

  searchOnKeyUp() {
    var obj = {
      key: window.YOUTUBE_API_KEY,
      query: $('input').val(),
      max: 10
    };
    this.props.searchYouTube(obj, this.setState.bind(this));    
  }
  
  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: '', max: 10}, this.setState.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search method={this.searchOnKeyUp.bind(this)} methods={this.searchOnClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.data[this.state.currentIndex]}/>
          </div>
          <div className="col-md-5" >
            <VideoList methods={this.videoOnClick.bind(this)} videos={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
