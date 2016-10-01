class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0] || {},
      videoList: window.exampleVideoData || [],
      options: {
        key: window.YOUTUBE_API_KEY,
        query: '',
        max: 10
      },
      changed: true
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      if (this.state.changed) {
        this.setState({
          changed: false
        });
        this.props.searchYouTube(this.state.options, data => {   
          this.setState({
            videoList: data,
            currentVideo: data[0]
          });
        });
      }
    }, 500);
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleSearch(input) {
    if (input !== undefined) {
      this.setState({
        changed: true,
        options: { 
          key: window.YOUTUBE_API_KEY,
          query: input,
          max: 10
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Nav handleSearch = {this.handleSearch.bind(this)} />
        <div className='col-md-7'>
          <VideoPlayer video = {this.state.currentVideo}/>
        </div>
        <div className='col-md-5'>
          <VideoList videos = {this.state.videoList} handleClick = {this.handleClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
