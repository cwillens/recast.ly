class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {},
      videoList: [],
      options: {
        key: window.YOUTUBE_API_KEY,
        query: '3-Year-Old Completely Covers Baby Brother with Peanut Butter',
        max: 10
      },
      changed: true
    };
  }

  componentDidMount() {
    this.props.searchYouTube(this.state.options, data => {   
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    });
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
