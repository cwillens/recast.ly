class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0] || {},
      videoList: window.exampleVideoData || []
    };
  }

  componentDidMount() {
    var options = { key: window.YOUTUBE_API_KEY, query: 'frog legs', max: 10 };
    this.props.searchYouTube(options, data => {
     
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    
    });
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.state.videoList} handleClick = {this.handleClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
